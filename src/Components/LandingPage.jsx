import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function LandingPage() {
  return (
    <div>
      <h1> Landing page </h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
export default LandingPage;
