import React, { useState, useRef } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import useAuth from "../../api/authApi";
import { getProductWithTypes } from '../../../config/typeDef';
import { useProductGradeHandler } from './addProductGradeHandler';

const AddProductGrade = () => {
  useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useQuery(getProductWithTypes, { variables: { id: parseInt(id) } });
  const [typeName, setTypeName] = useState("");
  const [grades, setGrades] = useState({ grade1: "", grade2: "", grade3: "", grade4: "", grade5: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const { handleGradeChange, handleSubmit, handleUpdate, handleDelete } = useProductGradeHandler(id, setTypeName, setGrades);

  const addGradeRef = useRef(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const handleUpdateClick = (productId, typeId, typeName, grades) => {
    navigate(`/update-product-type/${typeId}`, { state: { productId, typeName, grades } });
  };

  const handleAddGradeClick = () => {
    addGradeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    
    // Validation to ensure grade order
    if (!grades.grade1 && (grades.grade2 || grades.grade3 || grades.grade4 || grades.grade5)) {
      setErrorMsg("Grade 1 harus diisi sebelum mengisi Grade 2 hingga Grade 5");
      return;
    }
    if (!grades.grade2 && (grades.grade3 || grades.grade4 || grades.grade5)) {
      setErrorMsg("Grade 2 harus diisi sebelum mengisi Grade 3 hingga Grade 5");
      return;
    }
    if (!grades.grade3 && (grades.grade4 || grades.grade5)) {
      setErrorMsg("Grade 3 harus diisi sebelum mengisi Grade 4 hingga Grade 5");
      return;
    }
    if (!grades.grade4 && grades.grade5) {
      setErrorMsg("Grade 4 harus diisi sebelum mengisi Grade 5");
      return;
    }

    setErrorMsg(""); // Clear error message if validation passes
    handleSubmit(e, typeName, grades);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Grades for {data && data.products_by_pk && data.products_by_pk.name}</h2>
        <button onClick={handleAddGradeClick} className="btn btn-primary">Add Grade</button>
      </div>
      {data && data.products_by_pk && data.products_by_pk.product_type.length > 0 ? (
        <div>
          {data.products_by_pk.product_type.map(type => (
            <div key={type.id} className="mb-4 p-3" style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
              <h5>{type.name_type.length > 50 ? `${type.name_type.substring(0, 50)}...` : type.name_type}</h5>
              <div className="row">
                {type.grade1 && <div className="col-md-4"><p>1. {type.grade1}</p></div>}
                {type.grade2 && <div className="col-md-4"><p>2. {type.grade2}</p></div>}
                {type.grade3 && <div className="col-md-4"><p>3. {type.grade3}</p></div>}
                {type.grade4 && <div className="col-md-4"><p>4. {type.grade4}</p></div>}
                {type.grade5 && <div className="col-md-4"><p>5. {type.grade5}</p></div>}
              </div>
              <button onClick={() => handleUpdateClick(id, type.id, type.name_type, type)} className="btn btn-warning mr-2">Update</button>
              <button onClick={() => handleDelete(type.id)} className="btn btn-danger">Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No product types available.</p>
      )}
      <Link to="/" className="btn btn-secondary mt-3">Back to Products</Link>
      
      <div className="mt-5" ref={addGradeRef}>
        <h3>Add Product Type and Grades</h3>
        <form onSubmit={validateAndSubmit}>
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
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          <button type="submit" className="btn btn-primary mt-3">Add Product Type and Grades</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductGrade;
