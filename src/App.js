import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import CommingSoon from "./page/comingSoon";
import Header from "./components/navbar/Header";
import HeaderAdmin from "./components/navbar/HeaderAdmin";
import Footer from "./components/navbar/Footer";
import FormLogin from "./page/Admin/login";
import Dashboard from "./page/Admin/dashboard";
import BlogDetail from "./components/profilpage/BlogDetail.js";
// import Blog from "./components/profilpage/OurBlog";
// Product Admin
import ProductList from "./components/admin/products/listProduct";
import AddProduct from "./components/admin/products/addProduct";
import AddProductGrade from "./components/admin/products/addProductGrade";
import UpdateProduct from "./components/admin/products/UpdateProduct";
import UpdateGrade from "./components/admin/products/UpdateProductGrade.js";

// Blog Admin
import AddBlog from "./components/admin/blogs/addBlogs.js";
import UpdateBlog from "./components/admin/blogs/updateBlog.js";
import ListBlogs from "./components/admin/blogs/listBlogs.js";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client/apollo-client";
import Callback from "./Callbackk";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CommingSoon />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/main" element={<PageWithHeaderAndFooter component={Main} />} />
            <Route path="/blog/:id" element={<PageWithFooter component={BlogDetail} />} />
            <Route path="/listproduct" element={<PageWithHeader component={ProductList} />} />
            <Route path="/dashboard" element={<PageWithHeader component={Dashboard} />} />
            <Route path="/add" element={<PageWithHeader component={AddProduct} />} />
            <Route path="/add-grade/:id" element={<PageWithHeader component={AddProductGrade} />} />
            <Route path="/update/:id" element={<PageWithHeader component={UpdateProduct} />} />
            <Route path="/update-product-type/:id" element={<PageWithHeader component={UpdateGrade} />} />
            <Route path="/callback" element={<PageWithHeader component={Callback} />} />
            {/* <Route path="/back-blog" Component={Blog} /> */}
            {/* Blog Admin Routes */}
            <Route path="/add-blog" element={<PageWithHeader component={AddBlog} />} />
            <Route path="/update-blog/:id" element={<PageWithHeader component={UpdateBlog} />} />
            <Route path="/listblog" element={<PageWithHeader component={ListBlogs} />} />
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

function PageWithHeader({ component: Component }) {
  return (
    <div>
      <HeaderAdmin />
      <Component />
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

export default App;
