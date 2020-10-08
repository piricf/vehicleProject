import React, { useState } from "react";
import "./Form.css";
import FormSuccess from "./FormSuccess";
import FormSignUp from "./FormSignUp";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {/* <span className="close-btn">×</span> */}
        <div className="form-content-left">
          <img className="form-img" src="https://acad.xlri.ac.in/evening/images/login.svg" alt="login-img" />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
