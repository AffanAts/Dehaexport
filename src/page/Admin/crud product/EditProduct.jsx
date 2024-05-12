import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [grade, setGrade] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        name,
        description,
        image1,
        image2,
        grade,
      });
      navigate("/listproduct");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product. Please try again later.");
    }
  };

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      console.log("Response:", response); // <-- Tambahkan ini untuk debugging
      const { name, description, image1, image2, grade } = response.data;
      console.log("Data:", response.data); // <-- Tambahkan ini untuk debugging
      setName(name);
      setDescription(description);
      setImage1(image1);
      setImage2(image2);
      setGrade(grade);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to fetch product. Please try again later.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateProduct}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image 1</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={image1}
                onChange={(e) => setImage1(e.target.value)}
                placeholder="Image 1"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image 2</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={image2}
                onChange={(e) => setImage2(e.target.value)}
                placeholder="Image 2"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Grade</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Grade"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
