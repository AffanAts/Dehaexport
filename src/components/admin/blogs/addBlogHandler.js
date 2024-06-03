import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { addBlogMutation } from "../../../config/typeDef";

const useAddBlog = () => {
  const [addBlog, { data, error }] = useMutation(addBlogMutation);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

  const handleAddBlog = async (title, description, image, author) => {
    try {
      setIsSubmitting(true); // Show loader
      await addBlog({ variables: { title, description, image, author } });
      Swal.fire({
        title: "Good job!",
        text: "Blog added successfully!",
        icon: "success"
      }).then(() => {
        window.location.href = "/listblog"; // Redirect to /listblog
      });
    } catch (error) {
      console.error("Error adding blog:", error);
      Swal.fire({
        title: "Error!",
        text: "Error adding blog",
        icon: "error"
      });
    } finally {
      setIsSubmitting(false); // Hide loader
    }
  };

  return { handleAddBlog, data, error, isSubmitting }; // Return isSubmitting state
};

export default useAddBlog;
