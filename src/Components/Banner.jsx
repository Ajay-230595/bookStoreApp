import React from "react";
import BannerImage from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="  max-w-screen-2xl container mx-auto px-20 mx-4 flex flex-col md:flex-row md:pt-40 ">
        {/* left */}
        <div className=" order-2 md:order-1 w-full md:w-1/2 space-y-10">
          <h1 className="text-4xl">
            Hello, welcome here to learn something
            <span className="text-pink-500 bolder"> new everyday!!!</span>
          </h1>

          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            odit! Vitae mollitia soluta consequuntur libero officiis! Laboriosam
            quaerat quidem.
          </p>
          {/* input search box */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow " placeholder="Email" />
          </label>
          <div className="mt-0">
            <button className="mt- 0 btn btn-active btn-secondary">
              Secondary
            </button>
          </div>
        </div>

        {/* right */}
        <div className="mt-10 md:mt-0 order-1 w-full md:w-1/2 ">
          <img src={BannerImage} className="" alt="Books" />
        </div>
      </div>
    </>
  );
};

export default Banner;
