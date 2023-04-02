import React from "react";
import "../../../Assets/css/FAQ.css"


const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <>
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
    <hr className="FAQ-hr"/>
    </>
  );
};

export default FAQ;
