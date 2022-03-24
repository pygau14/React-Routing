import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function checkData(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password is required");
    } else if (password.length < 5) {
      setError("Minimum length of password is 5");
    } else {
      navigate("/welcome");
    }
  }
  return (
    <form onSubmit={checkData}>
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password.."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Sign Up</button>
      {error ? <h2>{error}</h2> : null}
    </form>
  );
}

export default SignUp;
