import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const saveBlog = async (e) => {
    e.preventDefault();
    try {
      // Mengirim data produk ke backend
      await axios.post("http://localhost:5001/blogs", {
        name,
        description,
        image,
        link,
      });
      // Navigasi kembali ke halaman utama atau halaman lain yang diinginkan
      navigate("/listBlog");
    } catch (error) {
      console.error("Error saving Blog:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveBlog}>
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
            <label className="label">Image</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Link</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={link}
                onChange={(e) => setLink(e.target.value)}
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

export default AddBlog;
