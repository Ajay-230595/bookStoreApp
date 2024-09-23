import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" h-screen  flex justify-center items-center   dark:bg-slate-950 dark:text-white  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 w-96 rounded-2xl"
        >
          <div className="  text-end dark:bg-slate-950 dark:text-white m-2 ">
            <Link
              to="/"
              className=" text-sm border rounded-2xl hover:bg-slate-100 p-1 px-2 "
            >
              ✕
            </Link>
          </div>
          <div className="px-20 py-5 ">
            <h1 className="font-bold text-xl text-center ">Signup !</h1>
            {/* Email and password */}
            <div className="py-10 text-start space-y-4  ">
              <h3>Name</h3>
              <input
                className="border rounded-lg px-3 py-1 w-64 outline-none"
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
              <h3>Email</h3>
              <input
                className="border rounded-lg px-3 py-1 w-64 outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}

              <h3>Password</h3>
              <input
                className="border rounded px-3 py-1 w-64 outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex-row text-center justify-between pt-5">
              <button className="bg-pink-500 px-5 py-2 text-white rounded-md hover:bg-pink-600">
                Signup
              </button>
              <div className="pt-4">
                Have account{" "}
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className=" underline text-blue-500"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
        <Login />
      </div>
    </>
  );
}

export default Signup;
