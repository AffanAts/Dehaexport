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
            element={<PageWithFooter component={ProductList} />}
          />
          <Route path="/add" element={<AddProduct />} />
          <Route path="listproduct/edit/:id" element={<EditProduct />} />{" "}
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

function PageWithFooter({ component: Component }) {
  return (
    <div>
      <Component />
      <Footer />
    </div>
  );
}

export default App;
