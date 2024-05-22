import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import CommingSoon from "./page/comingSoon";
import Header from "./components/navbar/Header";
import HeaderAdmin from "./components/navbar/HeaderAdmin";
import Footer from "./components/navbar/Footer";
import FormLogin from "./page/Admin/login";
import Dashboard from "./page/Admin/dashboard";
import ProductControl from "./page/Admin/productControl";
import ProductList from "./components/admin/products/listProduct";
import AddProduct from "./page/Admin/crud product/AddProduct";
import EditProduct from "./page/Admin/crud product/EditProduct";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import client from "./apollo-client/apollo-client";
import Auth0Login from './Auth0Login';
import Callback from './Callbackk';


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CommingSoon />} />
            <Route path="/listproduct" element={<PageWithHeader component={ProductList} />} />
            <Route path="/main" element={<PageWithHeaderAndFooter component={Main} />} />
            <Route path="/login" element={<PageWithHeaderAndFooter component={FormLogin} />} />
            <Route path="/dashboard" element={<PageWithHeaderAndFooter component={Dashboard} />} />
            <Route path="/product" element={<PageWithHeaderAndFooter component={ProductControl} />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="listproduct/edit/:id" element={<EditProduct />} />
            <Route path="/callback" element={<Callback />} /> 
            <Route path="/auth0-login" element={<Auth0Login />} />  
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

function PageWithHeaderAndFooter({ component: Component }) {
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}

function PageWithFooter({ component: Component }) {
  return (
    <div>
      <Component />
      <Footer />
    </div>
  );
}

function PageWithHeader({ component: Component }) {
  return (
    <div>
      <HeaderAdmin />
      <Component />
    </div>
  );
}

export default App;
