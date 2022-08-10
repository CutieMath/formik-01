import React, { useState } from "react";

const Signup = () => {
  // 1. Set up the state for data
  const [firstName, setFirstName] = useState("");
  // 2. Render the state in UI
  return (
    <form>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Signup;
