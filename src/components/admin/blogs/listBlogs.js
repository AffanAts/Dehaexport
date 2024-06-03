import React, { useState } from "react";
import { Link } from 'react-router-dom';
import useListBlogs from './listBlogHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "../../navbar/Loader";
import useAuth from "../../api/authApi";
import { Button } from "react-bootstrap";

const ListBlogs = () => {
    useAuth();
    const {
        data,
        error,
        loading,
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
        isSubmitting
    } = useListBlogs();

    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

    if (error) {
        console.log(error);
        return <div>Error fetching blogs: {error.message}</div>;
    }

    const toggleDescription = (blogId) => {
        if (expandedDescriptionId === blogId) {
            setExpandedDescriptionId(null);
        } else {
            setExpandedDescriptionId(blogId);
        }
    };

    return (
        <div className="container mt-5">
            {(loading || isSubmitting) && <Loader />}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Blogs</h2>
                <div>
                    <Link to="/add-blog" className="btn btn-primary">New Blog</Link>
                </div>
            </div>
            <div className="input-group mb-3">
                <input
                    value={searchInput}
                    onChange={onChangeSearchInput}
                    className="form-control"
                    placeholder="Search blogs by title..."
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <div>
                    <label>Blogs per page: </label>
                    <select value={blogsPerPage} onChange={handleBlogsPerPageChange} className="ml-2">
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
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && getDisplayedBlogs().map(blog => (
                            <tr key={blog.id}>
                                <td><img src={blog.image} alt={blog.title} style={{ width: '50px' }} /></td>
                                <td>{blog.title}</td>
                                <td>
                                    {blog.description.length > 100 ? (
                                        <>
                                            {expandedDescriptionId === blog.id 
                                                ? <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                                : <div dangerouslySetInnerHTML={{ __html: `${blog.description.substring(0, 100)}...` }} />}
                                            <span
                                                style={{ color: "blue", cursor: "pointer" }}
                                                onClick={() => toggleDescription(blog.id)}
                                            >
                                                {expandedDescriptionId === blog.id ? " Read less" : " Read more"}
                                            </span>
                                        </>
                                    ) : (
                                        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                                    )}
                                </td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <Link to={`/update-blog/${blog.id}`} className="btn btn-warning btn-sm">Update</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(blog.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    {data && !viewAll && Array.from({ length: Math.ceil(searchBlogs(searchInput).length / blogsPerPage) }, (_, i) => (
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

export default ListBlogs;
