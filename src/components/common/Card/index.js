import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card() {
  return (
    <div className="_card">
      <Link to="/slug">
        <div className="_card-wrapper relative overflow-hidden">
          <img
            src="https://via.placeholder.com/200"
            alt="demo"
            className="block w-full h-full object-contain transform hover:scale-125 transition-transform"
          />
          <div className="_card-content absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800 to-transparent">
            <h3 className="_card-title text-white font-bold text-4xl">{"Stray Night"}</h3>
            <p className="_card-subtitle text-gray-50 tracking-wide mt-1">
              {"Vincent Van Goth"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
