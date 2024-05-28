import React from "react";
import useUpdateProduct from "./updateProductHandler";
import Loader from "../../navbar/Loader";

const UpdateProduct = () => {
  const {
    loading,
    error,
    name,
    description,
    image,
    setName,
    setDescription,
    setImage,
    handleSubmit,
    isSubmitting, // Destructure isSubmitting
  } = useUpdateProduct();

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error loading product: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        {isSubmitting && <Loader />} {/* Show loader when submitting */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
        <button type="submit" className="btn btn-primary mt-3">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
