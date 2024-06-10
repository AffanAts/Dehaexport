import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../api/authApi";
import useAddBlog from "./addBlogHandler";
import Loader from "../../navbar/Loader"; // Import Loader
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  useAuth();
  const navigate = useNavigate();
  const { handleAddBlog, isSubmitting } = useAddBlog();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddBlog(title, description, image, author);
    setTitle("");
    setDescription("");
    setImage("");
    setAuthor("");
  };

  return (
    <div className="container mt-5">
      {isSubmitting && <Loader />} {/* Show loader when submitting */}
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <ReactQuill value={description} onChange={setDescription} />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button type="submit" className="btn btn-primary mt-3">
            Add Blog
          </button>
          <Link to="/listBlog" className="btn btn-secondary mt-3 ms-2">
            Back to Blog
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
