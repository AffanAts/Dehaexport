const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });


// Debugging: Print environment variables to ensure they are loaded correctly
console.log('HASURA_GRAPHQL_URL:', process.env.HASURA_GRAPHQL_URL);
console.log('HASURA_GRAPHQL_ADMIN_SECRET:', process.env.HASURA_GRAPHQL_ADMIN_SECRET);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    // origin: 'https://dehaexport.co.id', // URL aplikasi React Anda
    origin: 'http://localhost:3000', // URL aplikasi React Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // penting untuk mengizinkan kredensial
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

const secret = process.env.JWT_SECRET;
const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_URL;
const HASURA_ADMIN_SECRET = process.env.HASURA_GRAPHQL_ADMIN_SECRET;

if (!HASURA_GRAPHQL_URL || !HASURA_ADMIN_SECRET || !secret) {
    throw new Error('Environment variables HASURA_GRAPHQL_URL, HASURA_GRAPHQL_ADMIN_SECRET, and JWT_SECRET must be set');
}

const fetchUsers = async () => {
    const query = `
        query GetUsers {
            users {
                id
                username
                password
            }
        }
    `;
    const response = await fetch(HASURA_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
        },
        body: JSON.stringify({ query }),
    });
    const { data } = await response.json();
    return data.users;
};

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = await fetchUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign(
            {
                sub: user.id.toString(), // Ensure sub is a string
                username: user.username,
                "https://hasura.io/jwt/claims": {
                    "x-hasura-allowed-roles": ["user"],
                    "x-hasura-default-role": "user",
                    "x-hasura-user-id": user.id.toString() // Ensure user ID is a string
                }
            },
            secret,
            { expiresIn: '1h' }
        );
        res.json({ token });
    } else {
        res.status(401).send('Username or password is incorrect');
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
