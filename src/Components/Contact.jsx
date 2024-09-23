import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="cursor-pointer flex h-screen  justify-center items-center   dark:bg-slate-950 dark:text-white ">
        <div className=" border-2 w-3/4 md:w-2/5 rounded-2xl p-5 ">
          <h1 className="text-center text-2xl">Contact Us</h1>
          <div className=" space-y-4 pb-2 pt-8 pl-5 justify-center items-center">
            <p>Name</p>
            <input
              className="outline-none px-2 py-1 border rounded-md w-4/5 dark:text-black"
              type="text"
              placeholder="Enter your name"
            />
            <p>Email</p>
            <input
              className="outline-none px-2 py-1 border rounded-md w-4/5 dark:text-black"
              type="text"
              placeholder="Email address"
            />
            <p>Message</p>
            <textarea
              className="outline-none px-2 py-1 border rounded-md w-4/5  dark:text-black h-40"
              type="text"
              placeholder="Type your message..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
