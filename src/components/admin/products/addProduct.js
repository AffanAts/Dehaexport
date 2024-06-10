import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../api/authApi";
import useAddProduct from "./addProductHandler";
import Loader from "../../navbar/Loader"; // Import Loader

const AddProduct = () => {
  useAuth();
  const navigate = useNavigate();
  const { handleAddProduct, isSubmitting } = useAddProduct();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleAddProduct(name, description, image);
    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="container mt-5">
      {isSubmitting && <Loader />} {/* Show loader when submitting */}
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button type="submit" className="btn btn-primary mt-3">
            Add Product
          </button>
          <Link to="/listProduct" className="btn btn-secondary mt-3 ms-2">
            Back to Products
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
