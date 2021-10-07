import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function _404() {
  return (
    <div className="_404 h-screen max-h-screen">
      <div className="_container h-full flex flex-col gap-1 justify-center items-center">
        <h1 className="_code font-bold text-8xl text-gray-800">{"404"}</h1>
        <p className="_description text-gray-600">{"Page Not Found!"}</p>
        <Link to="/" className="mt-4 bg-gray-800 text-white px-3 py-1 rounded">{"Go Home"}</Link>
      </div>
    </div>
  );
}
