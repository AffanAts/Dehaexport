import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { getBlogById, updateBlogMutation, getAllBlogs } from '../../../config/typeDef';

const useUpdateBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(getBlogById, { variables: { id: parseInt(id) } });
    const [updateBlog] = useMutation(updateBlogMutation, {
        refetchQueries: [{ query: getAllBlogs }], // Refetch the list of blogs after updating
    });
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

    useEffect(() => {
        if (data && data.blogs.length > 0) {
            const blog = data.blogs[0];
            setTitle(blog.title);
            setDescription(blog.description);
            setImage(blog.image);
            setAuthor(blog.author);
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
                    await updateBlog({ variables: { id: parseInt(id), title, description, image, author } });
                    Swal.fire("Saved!", "", "success").then(() => {
                        navigate("/listblog"); // Redirect to /listblog
                        window.location.reload(); // Reload the page to reflect changes
                    });
                } catch (error) {
                    console.error("Error updating blog:", error);
                    Swal.fire("Error updating blog", "", "error");
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
        title,
        description,
        image,
        author,
        setTitle,
        setDescription,
        setImage,
        setAuthor,
        handleSubmit,
        isSubmitting, // Return isSubmitting state
    };
};

export default useUpdateBlog;
