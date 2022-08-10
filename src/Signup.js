import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

const Signup = () => {
  // 1. Set up the state for data
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    // 2. Validate the form data
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(8, "Must be 8 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(8, "Must be 8 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    // 3. Submit the value to the server
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName} // two-way binding
          onBlur={formik.handleBlur} // check if the field is touched
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="error">{formik.errors.firstName}</p>
        ) : null}
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName} // two-way binding
          onBlur={formik.handleBlur} // check if the field is touched
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="error">{formik.errors.lastName}</p>
        ) : null}
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email} // two-way binding
          onBlur={formik.handleBlur} // check if the field is touched
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
      </div>
      <button type="submit">Submit x</button>
    </form>
  );
};

export default Signup;
