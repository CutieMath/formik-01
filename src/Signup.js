import React, { useState } from "react";

const Signup = () => {
  // 1. Set up the state for data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName} // two-way binding
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName} // two-way binding
        />
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber} // two-way binding
        />
      </div>
      <button type="submit">Submit x</button>
    </form>
  );
};

export default Signup;
