import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function checkData(e) {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required");
    } else if (password.length < 5) {
      setError("Minimum length for password is 5");
    } else {
      navigate("/welcome");
    }
  }
  return (
    <form onSubmit={checkData}>
      <input
        type="text"
        value={username}
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password.."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Login</button>
      {error ? <h2>{error}</h2> : null}
    </form>
  );
}

export default Login;
