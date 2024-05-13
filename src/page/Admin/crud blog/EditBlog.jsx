import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBlogById();
  }, [id]);

  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/blogs/${id}`, {
        name,
        description,
        image,
        link,
      });
      navigate("/listblog");
    } catch (error) {
      console.error("Error updating blog:", error);
      setError("Failed to update blog. Please try again later.");
    }
  };

  const getBlogById = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/blogs/${id}`);
      console.log("Response:", response); // <-- Tambahkan ini untuk debugging
      const { name, description, image, link } = response.data;
      console.log("Data:", response.data); // <-- Tambahkan ini untuk debugging
      setName(name);
      setDescription(description);
      setImage(image);
      setLink(link);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError("Failed to fetch blog. Please try again later.");
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
        <form onSubmit={updateBlog}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
