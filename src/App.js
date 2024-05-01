import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import CommingSoon from "./page/comingSoon";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import FormLogin from "./page/Admin/login";
import Dashboard from "./page/Admin/dashboard";
import ProductControl from "./page/Admin/productControl";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommingSoon />} />
          <Route path="/main" element={<PageWithHeaderAndFooter component={Main} />} />
          <Route path="/login" element={<PageWithHeaderAndFooter component={FormLogin} />} />
          <Route path="/dashboard" element={<PageWithHeaderAndFooter component={Dashboard} />} />
          <Route path="/product" element={<PageWithHeaderAndFooter component={ProductControl} />} />
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
