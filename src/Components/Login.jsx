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
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button> */}
        <dialog id="my_modal_1" className="modal  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="modal-box  dark:bg-slate-950 dark:text-white"
          >
            <div className="  text-end ">
              <Link
                to="/"
                className=" text-sm border rounded-2xl hover:bg-slate-100 p-2"
              >
                Back-Homepage
              </Link>
            </div>
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
            <div className="flex justify-around pt-5">
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
            <div className="modal-action ">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Login;
