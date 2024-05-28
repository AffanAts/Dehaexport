import React from "react";
import { Link } from 'react-router-dom';
import useListProducts from './listProductHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "../../navbar/Loader"; // Import Loader
import useAuth from "../../api/authApi";

const ListProducts = () => {
    useAuth();
    const {
        data,
        error,
        loading, // Destructure loading state
        searchInput,
        currentPage,
        productsPerPage,
        viewAll,
        searchProducts,
        getDisplayedProducts,
        paginate,
        onChangeSearchInput,
        handleDelete,
        handleProductsPerPageChange,
        handleViewAllToggle,
        isSubmitting // Destructure isSubmitting
    } = useListProducts();

    if (error) {
        console.log(error);
        return <div>Error fetching products: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            {(loading || isSubmitting) && <Loader />} {/* Show loader when fetching data or deleting */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Products</h2>
                <div>
                    <Link to="/add" className="btn btn-primary">New product</Link>
                    <button className="btn btn-outline-primary ml-2">Export</button>
                </div>
            </div>
            <div className="input-group mb-3">
                <input
                    value={searchInput}
                    onChange={onChangeSearchInput}
                    className="form-control"
                    placeholder="Search products by name..."
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Filters</button>
                </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <label>Products per page: </label>
                    <select value={productsPerPage} onChange={handleProductsPerPageChange} className="ml-2">
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <button className="btn btn-outline-secondary" onClick={handleViewAllToggle}>
                    {viewAll ? 'Show Paginated' : 'View All'}
                </button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && getDisplayedProducts().map(product => (
                        <tr key={product.id}>
                            <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <Link to={`/update/${product.id}`} className="btn btn-warning btn-sm">Update</Link>
                                    <Link to={`/add-grade/${product.id}`} className="btn btn-info btn-sm">Add Grade</Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    {data && !viewAll && Array.from({ length: Math.ceil(searchProducts(searchInput).length / productsPerPage) }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                            <button onClick={() => paginate(i + 1)} className="page-link">
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ListProducts;
