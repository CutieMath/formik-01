import React, { useState } from "react";
import { useFormik } from "formik";
import "./Signup.css";

const Signup = () => {
  // 1. Set up the state for data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  // Submit the value to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, phoneNumber);
  };

  // 2. Render the state in UI
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName} // two-way binding
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName} // two-way binding
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email} // two-way binding
        />
      </div>
      <button type="submit">Submit x</button>
    </form>
  );
};

export default Signup;
