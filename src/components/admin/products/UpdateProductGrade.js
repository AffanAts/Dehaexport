import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useProductGradeHandler } from './addProductGradeHandler';

const UpdateProductType = () => {
  const { id: typeId } = useParams(); // This is the product_type ID
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, typeName: initialTypeName, grades: initialGrades } = location.state;

  const [typeName, setTypeName] = useState(initialTypeName);
  const [grades, setGrades] = useState(initialGrades);
  const [error, setError] = useState("");

  const { handleGradeChange, handleUpdate } = useProductGradeHandler(typeId, setTypeName, setGrades);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation to ensure grade order
    if (!grades.grade1) {
      setError("Grade 1 harus diisi sebelum mengisi Grade 2 hingga Grade 5");
      return;
    }
    if (grades.grade2 && !grades.grade1) {
      setError("Grade 1 harus diisi sebelum mengisi Grade 2");
      return;
    }
    if (grades.grade3 && !grades.grade2) {
      setError("Grade 2 harus diisi sebelum mengisi Grade 3");
      return;
    }
    if (grades.grade4 && !grades.grade3) {
      setError("Grade 3 harus diisi sebelum mengisi Grade 4");
      return;
    }
    if (grades.grade5 && !grades.grade4) {
      setError("Grade 4 harus diisi sebelum mengisi Grade 5");
      return;
    }

    setError(""); // Clear error if validation passes
    handleUpdate(typeId, typeName, grades);
    navigate(`/add-grade/${productId}`); // Redirect back to the add-grade page with the specific product ID after update
  };

  return (
    <div className="container mt-5">
      <h2>Update Product Type and Grades</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Type Name</label>
          <input
            type="text"
            className="form-control"
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Grade 1</label>
          <input
            type="text"
            className="form-control"
            name="grade1"
            value={grades.grade1}
            onChange={handleGradeChange}
          />
        </div>
        <div className="form-group">
          <label>Grade 2</label>
          <input
            type="text"
            className="form-control"
            name="grade2"
            value={grades.grade2}
            onChange={handleGradeChange}
          />
        </div>
        <div className="form-group">
          <label>Grade 3</label>
          <input
            type="text"
            className="form-control"
            name="grade3"
            value={grades.grade3}
            onChange={handleGradeChange}
          />
        </div>
        <div className="form-group">
          <label>Grade 4</label>
          <input
            type="text"
            className="form-control"
            name="grade4"
            value={grades.grade4}
            onChange={handleGradeChange}
          />
        </div>
        <div className="form-group">
          <label>Grade 5</label>
          <input
            type="text"
            className="form-control"
            name="grade5"
            value={grades.grade5}
            onChange={handleGradeChange}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary mt-3">Update Product Type and Grades</button>
      </form>
    </div>
  );
};

export default UpdateProductType;
