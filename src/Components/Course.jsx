import React from "react";
import list from "../../public/list.json";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 md:py-10 px-5 mx-4 ">
        <div className=" text-center justify-center items-center  ">
          <h1 className="pt-28 text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500 ">Here!:)</span>{" "}
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae
            culpa voluptatum nihil, mollitia quo, quasi consequuntur eligendi
            iste fugiat nobis ipsam. Veritatis neque perferendis porro natus
            dolor, tempora commodi quae facilis, error accusamus soluta qui?
            Optio quia dignissimos, est voluptates veniam, enim autem
            perferendis maxime tempora similique saepe fuga.
          </p>

          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-10 hover:bg-pink-800 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 mt-2 px-10 ">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
