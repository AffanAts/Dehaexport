import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query MyQuery @cached(refresh: true) {
    products {
      id
      image
      name
      description
    }
  }
`;

export const getProductTypes = gql`
  query GetProductTypes($id_product: ID!) {
    product_type(where: { id_product: { _eq: $id_product } }) {
      id
      id_product
      name_type
      grade1
      grade2
      grade3
      grade4
      grade5
    }
  }
`;

export const getAllBlogs = gql`
  query MyQuery @cached {
    blogs {
      id
      image
      description
      link
      title
      created_at
    }
  }
`;

export const getProductsById = gql`
  query MyQuery($id: Int!) @cached {
    products(where: { id: { _eq: $id } }) {
      id
      image
      name
      description
    }
  }
`;

export const loginUser = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const addProductMutation = gql`
  mutation AddProduct(
    $name: String = ""
    $image: String = ""
    $description: String = ""
  ) {
    insert_products_one(
      object: { description: $description, name: $name, image: $image }
    ) {
      description
      id
      image
      name
    }
  }
`;

export const updateProductMutation = gql`
  mutation UpdateProduct(
    $id: Int!
    $name: String!
    $description: String!
    $image: String!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, description: $description, image: $image }
    ) {
      id
      name
      description
      image
    }
  }
`;

export const deleteProductMutation = gql`
  mutation DeleteProductWithRelations($id: Int!) {
    delete_product_type(where: { id_product: { _eq: $id } }) {
      affected_rows
    }
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;

export const getTotalProducts = gql`
  query GetTotalProducts {
    products_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const addGradeMutation = gql`
  mutation AddGrade($id: ID!, $grade: String!) {
    update_product_type_by_pk(
      pk_columns: { id: $id }
      _set: { grade: $grade }
    ) {
      id
      grade
    }
  }
`;

export const getProductWithTypes = gql`
  query getProductWithTypes($id: Int!) {
    products_by_pk(id: $id) {
      id
      name
      product_type {
        id
        name_type
        grade1
        grade2
        grade3
        grade4
        grade5
      }
    }
  }
`;

export const addProductTypeMutation = gql`
  mutation AddProductType(
    $id_product: Int!
    $name_type: String!
    $grade1: String!
    $grade2: String!
    $grade3: String!
    $grade4: String!
    $grade5: String!
  ) {
    insert_product_type_one(
      object: {
        id_product: $id_product
        name_type: $name_type
        grade1: $grade1
        grade2: $grade2
        grade3: $grade3
        grade4: $grade4
        grade5: $grade5
      }
    ) {
      id
      id_product
      name_type
      grade1
      grade2
      grade3
      grade4
      grade5
    }
  }
`;

export const updateProductTypeMutation = gql`
  mutation UpdateProductType(
    $id: Int!
    $name_type: String!
    $grade1: String!
    $grade2: String!
    $grade3: String!
    $grade4: String!
    $grade5: String!
  ) {
    update_product_type_by_pk(
      pk_columns: { id: $id }
      _set: {
        name_type: $name_type
        grade1: $grade1
        grade2: $grade2
        grade3: $grade3
        grade4: $grade4
        grade5: $grade5
      }
    ) {
      id
      name_type
      grade1
      grade2
      grade3
      grade4
      grade5
    }
  }
`;

export const deleteProductTypeMutation = gql`
  mutation DeleteProductType($id: Int!) {
    delete_product_type_by_pk(id: $id) {
      id
    }
  }
`;
