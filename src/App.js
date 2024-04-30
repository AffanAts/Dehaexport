// app.js
import React from "react"; // Mengimport React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import FormLogin from "./page/Admin/login";
import Dashboard from "./page/Admin/dashboard";
import ProductControl from "./page/Admin/productControl"

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<ProductControl />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
