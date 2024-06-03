import { useState } from 'react';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { deleteBlogMutation } from '../../../config/typeDef';

const useDeleteBlog = (getBlogs) => {
    const [deleteBlog] = useMutation(deleteBlogMutation);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setIsSubmitting(true); // Show loader
                try {
                    await deleteBlog({ variables: { id: parseInt(id) } });
                    Swal.fire("Deleted!", "Your blog has been deleted.", "success").then(() => {
                        getBlogs(); // Refresh the blog list
                        window.location.reload(); // Refresh the page
                    });
                } catch (error) {
                    console.error("Error deleting blog:", error);
                    Swal.fire("Error!", "Error deleting blog", "error");
                } finally {
                    setIsSubmitting(false); // Hide loader
                }
            }
        });
    };

    return { handleDelete, isSubmitting }; // Return isSubmitting state
};

export default useDeleteBlog;
