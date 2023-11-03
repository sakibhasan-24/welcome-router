import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-center gap-12 my-20 bg-green-700 p-4 w-3/4 mx-auto">
      <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
      <Link to="/about">About Us</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
