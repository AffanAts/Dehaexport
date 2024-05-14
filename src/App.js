import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import CommingSoon from "./page/comingSoon";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import FormLogin from "./page/Admin/login";
import Dashboard from "./page/Admin/dashboard";
import ProductControl from "./page/Admin/productControl";
import ProductList from "./page/Admin/crud product/ProductList";
import AddProduct from "./page/Admin/crud product/AddProduct";
import EditProduct from "./page/Admin/crud product/EditProduct";
import BlogList from "./page/Admin/crud blog/ListBlog";
import AddBlog from "./page/Admin/crud blog/AddBlog";
import EditBlog from "./page/Admin/crud blog/EditBlog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommingSoon />} />
          <Route
            path="/main"
            element={<PageWithHeaderAndFooter component={Main} />}
          />
          <Route
            path="/login"
            element={<PageWithHeaderAndFooter component={FormLogin} />}
          />
          <Route
            path="/dashboard"
            element={<PageWithHeaderAndFooter component={Dashboard} />}
          />
          <Route
            path="/product"
            element={<PageWithHeaderAndFooter component={ProductControl} />}
          />
          <Route
            path="/listproduct"
            element={<PageWithHeaderAndFooter component={ProductList} />}
          />
          <Route path="/add" element={<AddProduct />} />
          <Route path="listproduct/edit/:id" element={<EditProduct />} />
          <Route path="/listblog" element={<BlogList />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="listblog/edit/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
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

export default App;
