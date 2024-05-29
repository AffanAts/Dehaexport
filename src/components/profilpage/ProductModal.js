import React from "react";
import { useQuery } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';
import Loader from '../navbar/Loader'; // Import Loader
import { getProductWithTypes } from '../../config/typeDef'; // Import query

export default function ProductModal({ productId, show, closeModal }) {
  const { data, loading, error } = useQuery(getProductWithTypes, {
    variables: { id: productId }
  });

  if (loading) return <Loader />;

  if (error) {
    console.error("Error loading product with types:", error);
    return <p>Error loading product with types.</p>;
  }

  const product = data?.products_by_pk || {};
  const productTypes = product?.product_type || [];

  const renderGrades = (type) => {
    const grades = [];
    if (type.grade1) grades.push(`1. ${type.grade1}`);
    if (type.grade2) grades.push(`2. ${type.grade2}`);
    if (type.grade3) grades.push(`3. ${type.grade3}`);
    if (type.grade4) grades.push(`4. ${type.grade4}`);
    if (type.grade5) grades.push(`5. ${type.grade5}`);

    return grades.map((grade, index) => (
      <div key={index} className="col-md-4">
        <p>{grade}</p>
      </div>
    ));
  };

  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productTypes.length > 0 ? (
          <div className="container">
            {productTypes.map((type, index) => (
              <div key={type.id} className="mb-4">
                <h5>{type.name_type}</h5>
                <div className="row">
                  {renderGrades(type)}
                </div>
                {index < productTypes.length - 1 && <hr />}
              </div>
            ))}
          </div>
        ) : (
          <p>No product types available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={closeModal}>
          Contact Us
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
