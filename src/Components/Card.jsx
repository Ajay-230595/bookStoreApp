import React from "react";

function Card({ item }) {
  return (
    <>
      <div className=" mt-10 sm:mt-1 px-5  py-10 md:p-4  ">
        <div className="card shadow-xl cursor-pointer hover:scale-105 duration-200 dark:bg-slate-950 dark:text-white  dark:border-[0.2px] ">
          <figure className=" h-[200px] mt-5">
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary ">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="mt-4 card-actions justify-between">
              <div className="cursor-pointer px-5 py-1 rounded-full border-[2px]">
                {item.price}
              </div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
