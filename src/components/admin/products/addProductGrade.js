import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import useAuth from "../../api/authApi";
import { getProductsById, getProductTypes, addGradeMutation } from '../../../config/typeDef';

const AddProductGrade = () => {
  useAuth();
  const { id } = useParams();
  const { data: productData, error: productError } = useQuery(getProductsById, { variables: { id: parseInt(id) } });
  const { data: typesData, error: typesError } = useQuery(getProductTypes, { variables: { id_product: id } });
  const [grades, setGrades] = useState({});
  const [addGrade] = useMutation(addGradeMutation);

  const handleGradeChange = (typeId, grade) => {
    setGrades({
      ...grades,
      [typeId]: grade,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (const [typeId, grade] of Object.entries(grades)) {
        await addGrade({ variables: { id: typeId, grade } });
      }
      alert("Grades added successfully!");
    } catch (error) {
      console.error("Error adding grades:", error);
      alert("Error adding grades!");
    }
  };

  if (productError || typesError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Add Grades for {productData && productData.products[0].name}</h2>
      <form onSubmit={handleSubmit}>
        {typesData && typesData.product_type.map(type => (
          <div key={type.id} className="form-group">
            <label>{type.name_type}</label>
            <input
              type="text"
              className="form-control"
              value={grades[type.id] || ""}
              onChange={(e) => handleGradeChange(type.id, e.target.value)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary mt-3">Add Grades</button>
      </form>
      <Link to="/" className="btn btn-secondary mt-3">Back to Products</Link>
    </div>
  );
};

export default AddProductGrade;
