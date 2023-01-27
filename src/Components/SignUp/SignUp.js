import { Typography } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <div className=" w-[80%]  mx-auto py-36 lg:ml-[250px] lg:">
      <h1 className="text-primary text-2xl font-bold">Give your Information</h1>

      <div className=" flex w-full items-center gap-4 mt-5"></div>
      {/* //AccountInformation */}
      <div className="my-10">
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            First name
          </p>
          <input
            type="text"
            placeholder="Enter First Name"
            className="text-white rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full outline-none bg-lightGray placeholder-white"
          />
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Last name
          </p>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="text-white rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full outline-none bg-lightGray placeholder-white"
          />
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Email Address
          </p>
          <input
            type="text"
            placeholder="Enter Email Address"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Phone Number
          </p>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">Address</p>
          <input
            type="text"
            placeholder="Enter Address"
            className="rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full bg-lightGray placeholder-white"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-bold py-2 px-10 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
