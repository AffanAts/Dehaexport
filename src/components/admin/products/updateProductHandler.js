import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { getProductsById, updateProductMutation } from "../../../config/typeDef";

const useUpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(getProductsById, { variables: { id: parseInt(id) } });
    const [updateProduct] = useMutation(updateProductMutation);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

    useEffect(() => {
        if (data && data.products.length > 0) {
            const product = data.products[0];
            setName(product.name);
            setDescription(product.description);
            setImage(product.image);
        }
    }, [data]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then(async (result) => {
            if (result.isConfirmed) {
                setIsSubmitting(true); // Show loader
                try {
                    await updateProduct({ variables: { id: parseInt(id), name, description, image } });
                    Swal.fire("Saved!", "", "success");
                    navigate("/listproduct");
                } catch (error) {
                    console.error("Error updating product:", error);
                    Swal.fire("Error updating product", "", "error");
                } finally {
                    setIsSubmitting(false); // Hide loader
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
                setIsSubmitting(false); // Hide loader
            } else {
                setIsSubmitting(false); // Hide loader
            }
        });
    };

    return {
        loading,
        error,
        name,
        description,
        image,
        setName,
        setDescription,
        setImage,
        handleSubmit,
        isSubmitting, // Return isSubmitting state
    };
};

export default useUpdateProduct;
