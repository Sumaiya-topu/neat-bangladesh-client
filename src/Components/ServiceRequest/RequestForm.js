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
          (You must full fill all the requirements to submit a pickup request)
        </p>
      </div>
      <div className="w-[72%] ">
        <Divider></Divider>
      </div>
      {/* //AccountInformation */}
      <div className="my-10 p-5 rounded-lg shadow-lg ">
        <div className=" mb-2 ">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Location
          </p>

          <div>
            <label className="floated-left">Area</label>
            <select
              className=" text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="cars"
              id="cars"
            >
              <option value="Uttara">Uttara</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="New Market">New Market</option>
              <option value="Bosila">Bosila</option>
            </select>
          </div>

          <div className="">

            <input
              type="text"
              placeholder="Enter Street"
              className="text-black border  rounded-md pl-2 py-1 mt-2  md:col-span-3 w-[30%] mr-5 outline-none text-dark placeholder-black"
            />
            <input
              type="text"
              placeholder="Apartment"
              className="text-black border  rounded-md pl-2 py-1 mt-2  md:col-span-3 w-[30%] mr-5 outline-none text-dark placeholder-black"
            />

          </div>
          <div className=" w-full">
            {" "}
            <p>Postal Code </p>
            <input
              type="text"
              className="rounded-md pl-2 py-1 mt-2  md:col-span-3 text-dark w-full"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">

        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Agency Name
          </p>
          <input
            type="text"
            placeholder="Your organization name"
            className=" border rounded-md pl-2 py-1 mt-2  md:col-span-3 w-full outline-none text-dark placeholder-black"
          />
        </div>
        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Email Address
          </p>
          <input
            type="text"
            placeholder="Enter Email Address"
            className="rounded-md border pl-2 py-1 mt-2  md:col-span-3 w-full text-dark placeholder-black"
          />
        </div>

        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Waste Amount
          </p>
        </div>
        <div className="w-[72%] flex gap-5 flex-col md:flex-row">
          <div className=" w-full">
            {" "}

            <input
              type="number"
              className="rounded-md border pl-2 py-1 mt-2  md:col-span-3 text-dark placeholder-black w-full"
            />
          </div>
          <div className="w-full">
            {" "}
            <p>Waste Type</p>
            <div>
              <select
                className=" text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="cars"
                id="cars"
              >
                <option value="Uttara">Household</option>
                <option value="Dhanmondi">Coming Soon</option>
                <option value="New Market">Piyajer Chokla</option>
                <option value="Bosila">Coke er bottle</option>
              </select>
            </div>

          </div>
        </div>
        <div className="w-[72%] flex gap-5 flex-col md:flex-row">
          
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
              className="rounded-md pl-2 py-1 mt-2  md:col-span-3 text-dark placeholder-black w-full"
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
