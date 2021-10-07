import React from "react";
import Slider from "../../components/common/Slider";
import "./style.css";

export default function Content() {
  return (
    <div className="_content mb-32">
      <div className="_container-fluid lg:flex lg:items-center justify-between">
        <div className="_content-header sm:flex items-center lg:items-end lg:w-1/2">
          <div
            className="_content-header-img relative"
            style={{ flexBasis: "75%" }}
          >
            <img
              src="https://via.placeholder.com/200"
              alt="demo"
              className="block w-full"
            />
            <div className="_content-header-content absolute transform translate-y-1/2 bottom-0 left-0 p-4 pb-0 pr-16 bg-white sm:top-0 sm:w-3/4 sm:bottom-auto sm:translate-y-0 sm:left-1/2 sm:p-10 sm:pt-0">
              <h1 className="_content-header-title text-gray-800 font-bold text-4xl md:text-6xl lg:text-5xl">
                {"Stray Night"}
              </h1>
              <p className="_content-header-subtitle text-gray-600 tracking-wide mt-1">
                {"Vincent Van Goth"}
              </p>
            </div>
          </div>
          <div
            className="_content-header-avatar ml-4 mt-16"
            style={{ flexBasis: "25%" }}
          >
            <img
              src="https://via.placeholder.com/64"
              alt="demo"
              className="block w-16 h-16 object-cover z-1"
            />
          </div>
        </div>
        <div className="_content-body lg:w-1/2">
          <div className="_content-year text-9xl text-right sm:font-bold sm:text-left lg:text-right lg:translate-y-1/3 opacity-10 transform sm:translate-y-1/2 pointer-events-none">
            {"1889"}
          </div>
          <div className="_content-description sm:w-3/4 mx-auto transform -translate-y-6 sm:translate-y-0 text-lg text-gray-600 leading-7">
            <p>
              {
                ' Although the stray night was painted during the day in Van Goth\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view witch Van Goth painted variations of no fewer than twenty-one times, including The Stray Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above witch, in the morning, I watch the sun rise in all its glory." '
              }
            </p>
          </div>
          <a
            href="https://www.google.com"
            className="_content-btn sm:mt-8 sm:block sm:w-3/4 mx-auto inline-block font-light text-sm text-gray-600 tracking-widest uppercase underline"
          >
            {"Go to source"}
          </a>
        </div>
      </div>

      <Slider />
    </div>
  );
}
