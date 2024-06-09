import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../dummy/ListFaq";

const FAQ = () => {
  const [openedIndex, setOpenedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "800px" }} id="Faq">
      <h1 className="text-center mb-4">Frequently Asked Questions</h1>
      <div className="faq-container">
        {data.map((item, index) => (
          <div key={index} className="faq-item mb-3">
            <div className="faq-question p-3" onClick={() => toggleFAQ(index)} style={{ cursor: "pointer", backgroundColor: "#f8f9fa", border: "1px solid #dee2e6", borderRadius: "5px" }}>
              <h5 className="mb-0">
                {openedIndex === index ? "-" : "+"} {item.question}
              </h5>
            </div>
            {openedIndex === index && (
              <div className="faq-answer p-3" style={{ backgroundColor: "#fff", border: "1px solid #dee2e6", borderRadius: "5px", borderTop: "none" }}>
                <p className="mb-0">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
