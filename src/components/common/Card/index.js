import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";

export default function Card({ data }) {
  return (
    <div className="_card">
      <Link to="/slug">
        <div className="_card-wrapper relative overflow-hidden">
          <LazyLoadImage
            alt={data.title}
            height={200}
            src={data.thumbnailUrl}
            width={200}
            className="block w-full object-contain transform transition-transform hover:scale-125"
          />

          <div className="_card-content absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800 to-transparent">
            <h3 className="_card-title text-white font-semibold text-3xl">
              {data.title?.length > 20
                ? data.title.slice(0, 20) + "..."
                : data.title}
            </h3>
            <p className="_card-subtitle text-gray-50 tracking-wide mt-1">
              {"Vincent Van Goth"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
