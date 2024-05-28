import { useState } from 'react';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { deleteProductMutation } from '../../../config/typeDef';

const useDeleteProduct = (getProducts) => {
    const [deleteProduct] = useMutation(deleteProductMutation);
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
                    await deleteProduct({ variables: { id: parseInt(id) } });
                    Swal.fire("Deleted!", "Your product has been deleted.", "success");
                    getProducts(); // Refresh the product list
                } catch (error) {
                    console.error("Error deleting product:", error);
                    Swal.fire("Error!", "Error deleting product", "error");
                } finally {
                    setIsSubmitting(false); // Hide loader
                }
            }
        });
    };

    return { handleDelete, isSubmitting }; // Return isSubmitting state
};

export default useDeleteProduct;
