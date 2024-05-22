import { Link } from 'react-router-dom'; // Menambahkan Link untuk berpindah halaman
import { getAllProducts } from '../../../config/typeDef';
import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListProducts = () => {
    const [getProducts, { data, error }] = useLazyQuery(getAllProducts);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (data && data.products) {
            setOriginalProducts(data.products);
        }
    }, [data]);

    if (error) {
        console.log(error);
        return null;
    }

    const searchProducts = (input) => {
        const filteredProducts = originalProducts.filter(product =>
            product.name.toLowerCase().includes(input.toLowerCase())
        );
        return filteredProducts;
    };

    const getDisplayedProducts = () => {
        const searchedProducts = searchInput ? searchProducts(searchInput) : originalProducts;
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="container">
            <div className='input-container mt-3 mb-3'>
                <input
                    value={searchInput}
                    onChange={onChangeSearchInput}
                    className="form-control"
                    placeholder="Search products by name..."
                />
                {/* Menambah tombol untuk berpindah ke halaman tambah produk */}
                <Link to="/addProduct" className="btn btn-primary ml-2">Add Product</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th> {/* Menambah kolom untuk action */}
                    </tr>
                </thead>
                <tbody>
                    {data && getDisplayedProducts().map(product => (
                        <tr key={product.id}>
                            <td><img src={product.image} alt={product.name} style={{ width: '100px' }} /></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                {/* Menambah tombol update */}
                                <button className="btn btn-warning mr-2">Update</button>
                                {/* Menambah tombol delete */}
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {data && (
                    <ul className='pagination'>
                        {Array.from({ length: Math.ceil(searchProducts(searchInput).length / productsPerPage) }, (_, i) => (
                            <li key={i} className='page-item'>
                                <button onClick={() => paginate(i + 1)} className='page-link'>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ListProducts;
