import React, { useState } from "react";
import "../../Assets/css/FAQ.css";
import FAQ from "./inner-component/FAQ";

const FAQmain = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Skymet Sikka Award?",
      answer:
        "Skymet Sikka Award is a prestigious recognition honouring the legacy of the late Dev Raj Sikka. This award recognizes and celebrates Mr. Sikka's unwavering passion and commitment to advancing the field of Indian Meteorology, particularly his remarkable contribution to the study of the Indian Monsoon.",
      open: true,
    },
    {
      question: "What is the goal of Skymet Sikka Award?",
      answer: "The goal of Skymet Sikka Award is to acknowledge and promote the efforts of individuals who are contributing to the advancement of the field of Indian Meteorology and working across multiple disciplines to further our understanding of it.",
      open: false,
    },
    {
      question:
        "What are the categories of Skymet Sikka Award?",
      answer: "The Skymet Sikka Award has 5 categories: Climate Change, Monsoon Dynamics, Monsoon Predictions, Cyclones, and Satellite Meteorology.",
      open: false,
    },
    {
      question: "What is the prize for winning Skymet Sikka Award?",
      answer:
        "The winning prize for Skymet Sikka Award is Rs. 1,00,000 along with a Trophy and a Certificate.",
      open: false,
    },
    {
      question: "What are the rules for submitting research papers for Skymet Sikka Award?",
      answer: "Ensure that the first and corresponding author of the paper is under 40 years of age and the research paper should be original.",
      open: false,
    },
    {
      question:
        "When will the winner of Skymet Sikka Award be announced?",
      answer: "The winner of Skymet Sikka Award will be announced on 3rd June 2023.",
      open: true,
    },
    
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        } else {
          return { ...faq, open: false };
        }
      })
    );
  };

  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half);

  return (
    <div className="App" id="faq">
      <div>
        <span>FAQs</span>
      </div>
      <div className="faqs-container">
        <div className="faqs">
          {firstHalf.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <div className="faqs">
          {secondHalf.map((faq, index) => (
            <FAQ
              faq={faq}
              index={index + half}
              key={index + half}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQmain;
