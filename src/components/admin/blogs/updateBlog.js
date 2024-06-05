import React from "react";
import useUpdateBlog from "./updateBlogHandler";
import Loader from "../../navbar/Loader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateBlog = () => {
  const {
    loading,
    error,
    title,
    description,
    image,
    author,
    setTitle,
    setDescription,
    setImage,
    setAuthor,
    handleSubmit,
    isSubmitting, // Destructure isSubmitting
  } = useUpdateBlog();

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error loading blog: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        {isSubmitting && <Loader />} {/* Show loader when submitting */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <ReactQuill
            value={description}
            onChange={setDescription}

          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;