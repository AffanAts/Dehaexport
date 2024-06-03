import { useLazyQuery } from '@apollo/client';
import { getAllBlogs } from '../../../config/typeDef';
import { useState, useEffect } from 'react';
import useDeleteBlog from './deleteBlogHandler';

const UseListBlogs = () => {
    const [getBlogs, { data, error, loading }] = useLazyQuery(getAllBlogs); // Include loading state
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(5);
    const [originalBlogs, setOriginalBlogs] = useState([]);
    const [viewAll, setViewAll] = useState(false);
    const { handleDelete, isSubmitting } = useDeleteBlog(getBlogs); // Destructure isSubmitting

    useEffect(() => {
        getBlogs();
    }, [getBlogs]);

    useEffect(() => {
        if (data && data.blogs) {
            setOriginalBlogs(data.blogs);
        }
    }, [data]);

    const searchBlogs = (input) => {
        const filteredBlogs = originalBlogs.filter(blog =>
            blog.title.toLowerCase().includes(input.toLowerCase())
        );
        return filteredBlogs;
    };

    const getDisplayedBlogs = () => {
        const searchedBlogs = searchInput ? searchBlogs(searchInput) : originalBlogs;
        if (viewAll) {
            return searchedBlogs;
        }
        const indexOfLastBlog = currentPage * blogsPerPage;
        const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
        return searchedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    const handleBlogsPerPageChange = (e) => {
        setBlogsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleViewAllToggle = () => {
        setViewAll(!viewAll);
        setCurrentPage(1);
    };

    return {
        data,
        error,
        loading, // Return loading state
        searchInput,
        currentPage,
        blogsPerPage,
        viewAll,
        searchBlogs,
        getDisplayedBlogs,
        paginate,
        onChangeSearchInput,
        handleDelete,
        handleBlogsPerPageChange,
        handleViewAllToggle,
        isSubmitting // Return isSubmitting state
    };
};

export default UseListBlogs;
