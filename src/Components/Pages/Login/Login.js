import React from "react";
import { Icon } from "@iconify/react";
// import password from "../../../assets/lock-icon.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data.email, data.password);

  return (
    <div
      className=" login py-40  from"
      //   style={{ background: `url(${backgroundImage})`, objectFit: "cover" }}
    >
      <div
        className="max-w-lg mx-auto  rounded-xl py-8 px-10 bg-white"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        }}
      >
        <div className="text-center">
          {/* <img
            src={login}
            className="block mx-auto mb-[20px] md:mb-[40px]"
            alt=""
          /> */}
          <h4 className="text-[38px] text-accent font-bold">Login</h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 grid gap-3">
          <div className="flex gap-1 items-center border-2 rounded-md p-2 border-[#B9B9B9]">
            <span>
              <Icon
                icon="ic:baseline-phone-android"
                width={30}
                height={30}
                className="text-primary"
              />
            </span>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="Enter Your Email...."
              className="w-full p-2 focus:outline-none"
              required
            />
          </div>
          {errors.email && (
            <span className="text-red">This field is required</span>
          )}
          {/* <p className="text-xs font-bold text-[#ff0000]">
            {errors.phone && <span>This field is required</span>}
          </p> */}
          <div className="flex gap-1 items-center border-2 rounded-md p-2 border-[#B9B9B9]">
            <span>
              <Icon
                icon="material-symbols:lock"
                width={30}
                height={30}
                className="text-primary"
              />
            </span>
            <input
              type={"password"}
              placeholder="Enter your password...."
              className="w-full p-2 focus:outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red">Enter valid password</span>
            )}
          </div>
          <p className="text-xs font-bold text-[#ff0000]">
            {/* {errors.password && <span>This field is required</span>} */}
          </p>
          <button
            type="submit"
            className="bg-primary text-white uppercase font-bold py-2 rounded-md"
          >
            Login
          </button>
        </form>
        <div className="block md:flex justify-between items-center mt-5">
          <div className="flex gap-2 font-bold">
            <p className="text-[#000] text-xs md:text-sm">
              Don't have an account ?
            </p>
            <Link to={"/signup"} className="text-primary text-xs md:text-sm">
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm mt-5">
            To continue as an Organization , please register your account to
          </p>
          <Link
            to="/signup-organization"
            className="text-primary text-sm font-bold "
          >
            Sign-up as an Organization
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
