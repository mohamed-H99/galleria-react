import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  const startSlideshow = () => {};
  const stopSlideshow = () => {};

  return (
    <header className="main-header">
      <div className="_container-fluid flex justify-between items-center gap-1 py-4 border-b border-gray-200">
        <div className="logo">
          <Link to="/">
            <img src="" alt="" className="hidden" />
            <span className="text-gray-800 text-4xl font-bold">
              {"galleria."}
            </span>
          </Link>
        </div>

        <div className="">
          <button className="font-light text-sm text-gray-600 tracking-widest uppercase" onClick={startSlideshow}>
            {"Start Slideshow"}
          </button>
          <button
            className="font-light text-sm text-gray-600 tracking-widest uppercase hidden"
            onClick={stopSlideshow}
          >
            {"Stop Slideshow"}
          </button>
        </div>
      </div>
    </header>
  );
}
