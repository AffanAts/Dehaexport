import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5001/products");
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to="/add" className="">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image1</th>
              <th>Image2</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image1} style={{ height: "200px" }} />
                </td>
                <img src={product.image2} style={{ height: "200px" }} />{" "}
                <td>{product.grade}</td>
                <td>
                  <Link
                    to={`edit/${product.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
