import { useMutation } from '@apollo/client';
import { addProductTypeMutation, updateProductTypeMutation, deleteProductTypeMutation } from '../../../config/typeDef';

export const useProductGradeHandler = (id, setTypeName, setGrades) => {
  const [addProductType] = useMutation(addProductTypeMutation);
  const [updateProductType] = useMutation(updateProductTypeMutation);
  const [deleteProductType] = useMutation(deleteProductTypeMutation);

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
      alert("Product type and grades added successfully!");
      setTypeName("");
      setGrades({ grade1: "", grade2: "", grade3: "", grade4: "", grade5: "" });
    } catch (error) {
      console.error("Error adding product type and grades:", error);
      alert("Error adding product type and grades!");
    }
  };

  const handleUpdate = async (typeId, typeName, grades) => {
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
      alert("Product type and grades updated successfully!");
    } catch (error) {
      console.error("Error updating product type and grades:", error);
      alert("Error updating product type and grades!");
    }
  };

  const handleDelete = async (typeId) => {
    try {
      await deleteProductType({ variables: { id: typeId } });
      alert("Product type deleted successfully!");
    } catch (error) {
      console.error("Error deleting product type:", error);
      alert("Error deleting product type!");
    }
  };

  return { handleGradeChange, handleSubmit, handleUpdate, handleDelete };
};
