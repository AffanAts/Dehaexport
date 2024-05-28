import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { addProductMutation } from "../../../config/typeDef";

const useAddProduct = () => {
  const [addProduct, { data, error }] = useMutation(addProductMutation);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

  const handleAddProduct = async (name, description, image) => {
    try {
      setIsSubmitting(true); // Show loader
      await addProduct({ variables: { name, description, image } });
      Swal.fire({
        title: "Good job!",
        text: "Product added successfully!",
        icon: "success"
      }).then(() => {
        window.location.href = "/listproduct"; // Redirect to /listproduct
      });
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        title: "Error!",
        text: "Error adding product",
        icon: "error"
      });
    } finally {
      setIsSubmitting(false); // Hide loader
    }
  };

  return { handleAddProduct, data, error, isSubmitting }; // Return isSubmitting state
};

export default useAddProduct;
