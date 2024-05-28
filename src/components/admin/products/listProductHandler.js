import { useLazyQuery } from '@apollo/client';
import { getAllProducts } from '../../../config/typeDef';
import { useState, useEffect } from 'react';
import useDeleteProduct from './deleteProductHandler';

const useListProducts = () => {
    const [getProducts, { data, error }] = useLazyQuery(getAllProducts);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [viewAll, setViewAll] = useState(false);
    const { handleDelete, isSubmitting } = useDeleteProduct(getProducts); // Destructure isSubmitting

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    useEffect(() => {
        if (data && data.products) {
            setOriginalProducts(data.products);
        }
    }, [data]);

    const searchProducts = (input) => {
        const filteredProducts = originalProducts.filter(product =>
            product.name.toLowerCase().includes(input.toLowerCase())
        );
        return filteredProducts;
    };

    const getDisplayedProducts = () => {
        const searchedProducts = searchInput ? searchProducts(searchInput) : originalProducts;
        if (viewAll) {
            return searchedProducts;
        }
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    const handleProductsPerPageChange = (e) => {
        setProductsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleViewAllToggle = () => {
        setViewAll(!viewAll);
        setCurrentPage(1);
    };

    return {
        data,
        error,
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
        isSubmitting // Return isSubmitting state
    };
};

export default useListProducts;
