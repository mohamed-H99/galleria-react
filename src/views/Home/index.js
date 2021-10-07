import React from "react";
import Card from "../../components/common/Card";
import "./style.css";

export default function Home() {
  return (
    <div className="_home">
      <div className="_container-fluid">
        <div className="_columns grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {/* outer loop *max-cols(4)*/}
          <div className="_column flex flex-col gap-4">
            {/* inner loop */}
            <Card data="" />
          </div>
        </div>
      </div>
    </div>
  );
}
