# Gunakan image dasar dari Hasura GraphQL Engine
FROM hasura/graphql-engine:v2.0.10

# Set environment variables
ENV HASURA_GRAPHQL_DATABASE_URL="postgres://myusername:mypassword@deha-export-postgres-1:5432/mydbname"
ENV HASURA_GRAPHQL_ADMIN_SECRET="Q2dkJ401j1PmbjPcqedy4uwc2hgwzTMaUZ4zgWJqbUfvwcnzWaswS4rISFy50T68"

# Salin file jwt-secret.json ke dalam image Docker
COPY jwt-secret.json /etc/jwt-secret.json

# Perintah untuk menjalankan Hasura GraphQL Engine
CMD ["graphql-engine", "serve", "--jwt-secret-file", "/etc/jwt-secret.json"]
