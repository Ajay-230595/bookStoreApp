import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button> */}

      {/* new box---------------------------------------------------------- */}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="h-80" onSubmit={handleSubmit(onSubmit)}>
            
            <h3 className="font-bold text-center text-lg">Login !</h3>
            {/* Email and password */}
            <div className="py-4 text-start space-y-4  ">
              <p>Email</p>
              <input
                className="border rounded-lg px-3 py-1 w-3/4 outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}

              <p>Password</p>
              <input
                className="border rounded px-3 py-1 w-3/4 outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 ">This field is required</span>
              )}
            </div>
            <div className="flex justify-around pt-10">
              <button className="bg-pink-500 px-5 py-2 text-white rounded-md hover:bg-pink-600">
                Login
              </button>
              <p className="pt-4">
                Not registered?{" "}
                <Link to="/signup" className=" underline text-blue-500 ">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
