import { Divider } from "@mui/material";
import React from "react";
import avatar from "../../assets/avatar.jpg";

const RequestForm = () => {
  return (
    <div className=" w-[80%]  mx-auto py-20   lg:ml-[250px]">
      <div className="w-auto">
        <h1 className="text-primary text-2xl font-bold ">
          Requesting for Waste Collect
        </h1>
        <p className="text-gray text-xs font-semibold">
          (You must full fill all the requirements to submit a request)
        </p>
      </div>
      <div className="w-[72%]">
        <Divider></Divider>
      </div>
      {/* //AccountInformation */}
      <div className="my-10">
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Location
          </p>
          <div className="area">
            <label className="floating_standard">Area</label>
            <select
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="cars"
              id="cars"
            >
              <option value="Uttara">Uttara</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="New Market">New Market</option>
              <option value="Bosila">Bosila</option>
            </select>
          </div>
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
            Agency Name
          </p>
          <input
            type="text"
            placeholder="Your organization name"
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
            Location
          </p>
        </div>
        <div className="w-[72%] flex gap-5 flex-col md:flex-row">
          <div className=" w-full">
            {" "}
            <p>City</p>
            <input
              type="text"
              className="rounded-md pl-2 py-1 mt-2  md:col-span-3 bg-lightGray placeholder-white w-full"
            />
          </div>
          <div className="w-full">
            {" "}
            <p>City corporation area</p>
            <input
              type="text"
              className="rounded-md pl-2 py-1 mt-2  md:col-span-3 bg-lightGray placeholder-white w-full"
            />
          </div>
        </div>
        <div className="w-[72%] flex gap-5 flex-col md:flex-row">
          <div className=" w-full">
            {" "}
            <p>Postal Code </p>
            <input
              type="text"
              className="rounded-md pl-2 py-1 mt-2  md:col-span-3 bg-lightGray w-full"
            />
          </div>
          <div className="w-full">
            {" "}
            <p>
              Tin Certificate{" "}
              <span className="text-xs font-semibold text-gray">
                {" "}
                (Upload Image(jpg, jpeg, png))
              </span>
            </p>
            <input
              type={"file"}
              name="image"
              className="rounded-md pl-2 py-1 mt-2  md:col-span-3 bg-lightGray placeholder-white w-full"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-white font-bold py-2 px-10 rounded-md"
      >
        Sign Up
      </button>
    </div>
  );
};

export default RequestForm;
