import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      // Mengirim data produk ke backend
      await axios.post("http://localhost:5000/products", {
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
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
                placeholder="Image1"
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
                placeholder="Image2"
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
