import React from "react";
import Forward from "../../../assets/img/forward.png";
import Backward from "../../../assets/img/backward.png";
import "./style.css";

export default function Slider() {
  return (
    <div className="_slider fixed bottom-0 left-0 right-0">
      <div className="_container-fluid border-t border-gray-300 bg-white flex justify-between items-center">
        <div className="_content py-2">
          <h3 className="_content-title text-gray-800 font-bold text-2xl">
            {"Stray Night"}
          </h3>
          <p className="_content-subtitle text-gray-600 text-sm tracking-wide mt-1">
            {"Vincent Van Goth"}
          </p>
        </div>
        <div className="_ctrl flex gap-3">
          <button className="opacity-25 hover:opacity-80">
            <img src={Backward} alt="prev" className="w-8 h-8" />
          </button>
          <button className="opacity-80 hover:opacity-80">
            <img src={Forward} alt="next" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
