import { Divider, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { createHashRouter } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    createHashRouter(data.email, data.password);
  };
  //save user info

  const saveUser = (firstName, lastName, email, phone, address) => {
    const user = { firstName, lastName, email, phone, address };
    fetch(
      "https://5e2b-2400-a7c0-c000-9-a91b-71f5-3948-97e.in.ngrok.io/account"
    );
  };

  return (
    <div className=" w-[80%]  mx-auto py-36 lg:ml-[250px] lg:">
      <h1 className="text-primary text-2xl font-bold">Give your Information</h1>

      <div className="w-[72%]">
        <Divider></Divider>
      </div>
      {/* //AccountInformation */}
      <form onSubmit={handleSubmit(handleSignUp)} className="my-10">
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            First name
          </p>
          <input
            {...register("firstName", { required: true })}
            type="text"
            placeholder="Enter First Name"
            className="text-white rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full outline-none bg-lightGray placeholder-white"
          />
          {errors.firstName && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Last name
          </p>
          <input
            {...register("lastName", { required: true })}
            type="text"
            placeholder="Enter Last Name"
            className="text-white rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full outline-none bg-lightGray placeholder-white"
          />
          {errors.lastName && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Email Address
          </p>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Enter Email Address"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
          {errors.email && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Password
          </p>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter Email Address"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
          {errors.email && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Phone Number
          </p>
          <input
            {...register("phoneNumber", { required: true })}
            type="text"
            placeholder="Enter Phone Number"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
          {errors.phoneNumber && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">Address</p>
          <input
            {...register("address", { required: true })}
            type="text"
            placeholder="Enter Address"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
          {errors.address && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-bold py-2 px-10 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
