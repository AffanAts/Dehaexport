import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { addProductTypeMutation, updateProductTypeMutation, deleteProductTypeMutation } from '../../../config/typeDef';
import Loader from "../../navbar/Loader";

export const useProductGradeHandler = (id, setTypeName, setGrades, refetch) => {
  const [addProductType, { loading: addLoading }] = useMutation(addProductTypeMutation);
  const [updateProductType, { loading: updateLoading }] = useMutation(updateProductTypeMutation);
  const [deleteProductType, { loading: deleteLoading }] = useMutation(deleteProductTypeMutation);

  const handleGradeChange = (e) => {
    const { name, value } = e.target;
    setGrades(prevGrades => ({
      ...prevGrades,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, typeName, grades) => {
    e.preventDefault();
    try {
      await addProductType({ 
        variables: { 
          id_product: parseInt(id), 
          name_type: typeName, 
          grade1: grades.grade1, 
          grade2: grades.grade2, 
          grade3: grades.grade3, 
          grade4: grades.grade4, 
          grade5: grades.grade5 
        } 
      });
      Swal.fire({
        title: "Good job!",
        text: "Product type and grades added successfully!",
        icon: "success"
      });
      setTypeName("");
      setGrades({ grade1: "", grade2: "", grade3: "", grade4: "", grade5: "" });
      refetch(); // Refresh halaman setelah submit
    } catch (error) {
      console.error("Error adding product type and grades:", error);
      Swal.fire({
        title: "Error!",
        text: "Error adding product type and grades!",
        icon: "error"
      });
    }
  };

  const handleUpdate = async (typeId, typeName, grades) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updateProductType({ 
            variables: { 
              id: typeId, 
              name_type: typeName, 
              grade1: grades.grade1, 
              grade2: grades.grade2, 
              grade3: grades.grade3, 
              grade4: grades.grade4, 
              grade5: grades.grade5 
            } 
          });
          Swal.fire("Saved!", "", "success");
          refetch(); // Refresh halaman setelah update
        } catch (error) {
          console.error("Error updating product type and grades:", error);
          Swal.fire({
            title: "Error!",
            text: "Error updating product type and grades!",
            icon: "error"
          });
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleDelete = async (typeId) => {
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
        try {
          await deleteProductType({ variables: { id: typeId } });
          Swal.fire({
            title: "Deleted!",
            text: "Product type deleted successfully!",
            icon: "success"
          });
          refetch(); // Refresh halaman setelah delete
        } catch (error) {
          console.error("Error deleting product type:", error);
          Swal.fire({
            title: "Error!",
            text: "Error deleting product type!",
            icon: "error"
          });
        }
      }
    });
  };

  return { handleGradeChange, handleSubmit, handleUpdate, handleDelete, addLoading, updateLoading, deleteLoading };
};
