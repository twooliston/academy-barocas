import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page long-text">
      <h1>Contact Barocas</h1>
      <p>
        If you have any questions, please see the <Link to="/faqs">FAQs</Link>.
        If your questions are still not answered, please fill out the
        information below:
      </p>
      <h1>Currently Unavailable</h1>
      <h1>Please check back later</h1>
    </div>
  );
};

export default Contact;
