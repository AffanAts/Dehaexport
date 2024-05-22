import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query MyQuery @cached {
    products {
      id
      image
      name
      description
    }
  }
`;

export const getProductsById = gql`
  query MyQuery($_eq: Int = 0) @cached {
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

