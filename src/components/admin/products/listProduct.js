import React, { useState } from "react";
import { Link } from 'react-router-dom';
import useListProducts from './listProductHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "../../navbar/Loader";
import useAuth from "../../api/authApi";
import { Button } from "react-bootstrap";
import ProductModal from "../../profilpage/ProductModal"; // Import ProductModal

const ListProducts = () => {
    useAuth();
    const {
        data,
        error,
        loading,
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
        isSubmitting
    } = useListProducts();

    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    if (error) {
        console.log(error);
        return <div>Error fetching products: {error.message}</div>;
    }

    const toggleDescription = (productId) => {
        if (expandedDescriptionId === productId) {
            setExpandedDescriptionId(null);
        } else {
            setExpandedDescriptionId(productId);
        }
    };

    const handleShowModal = (productId) => {
        setSelectedProductId(productId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProductId(null);
    };

    return (
        <div className="container mt-5">
            {(loading || isSubmitting) && <Loader />}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Products</h2>
                <div>
                    <Link to="/add" className="btn btn-primary">New product</Link>
                </div>
            </div>
            <div className="input-group mb-3">
                <input
                    value={searchInput}
                    onChange={onChangeSearchInput}
                    className="form-control"
                    placeholder="Search products by name..."
                />
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
            <div style={{ overflowX: 'auto' }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && getDisplayedProducts().map(product => (
                            <tr key={product.id}>
                                <td><img src={product.image} alt={product.name} style={{ width: '50px' }} /></td>
                                <td>{product.name}</td>
                                <td>
                                    {product.description.length > 100 ? (
                                        <>
                                            {expandedDescriptionId === product.id 
                                                ? product.description 
                                                : `${product.description.substring(0, 100)}...`}
                                            <span
                                                style={{ color: "blue", cursor: "pointer" }}
                                                onClick={() => toggleDescription(product.id)}
                                            >
                                                {expandedDescriptionId === product.id ? " Read less" : " Read more"}
                                            </span>
                                        </>
                                    ) : (
                                        product.description
                                    )}
                                </td>
                                <td>
                                    <Button
                                        className="text-white my-3"
                                        style={{
                                            textDecoration: "none",
                                            padding: "5px 10px",
                                            fontSize: "12px",
                                            height: "27px",
                                            width: "auto",
                                        }}
                                        onClick={() => handleShowModal(product.id)}
                                    >
                                        Details
                                    </Button>
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <Link to={`/update/${product.id}`} className="btn btn-warning btn-sm">Update</Link>
                                        <Link to={`/add-grade/${product.id}`} className="btn btn-info btn-sm">Grade</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
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

            {selectedProductId && (
                <ProductModal
                    productId={selectedProductId}
                    show={showModal}
                    closeModal={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ListProducts;
