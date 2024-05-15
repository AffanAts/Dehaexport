import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../../../components/api/authApi";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      // Mengirim data produk ke backend
      await axios.post("http://localhost:5001/products", {
        name,
        description,
        image1,
        image2,
        grade,
      });
      // Navigasi kembali ke halaman utama atau halaman lain yang diinginkan
      navigate("/listproduct");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="mb-3">
            <label className="form">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image 1</label>
            <input
              type="text"
              className="form-control"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
              placeholder="Image1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image 2</label>
            <input
              type="text"
              className="form-control"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
              placeholder="Image2"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Grade</label>
            <input
              type="text"
              className="form-control"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Grade"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
