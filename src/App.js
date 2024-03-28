// app.js
import React from "react"; // Mengimport React

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Header from "./components/navbar/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> {/* Menghapus 'exact' */}
          {/* <Route path="/about" element={<About />} />{" "} */}
          {/* Mengubah path menjadi '/about' */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
