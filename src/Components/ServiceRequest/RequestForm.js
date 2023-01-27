import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthUser from "../../Hooks/AuthUser";

const RequestForm = () => {
  const { http, setToken, getToken } = AuthUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "ok");

    const requestData = {
      address: data?.apartment + ", " + data.street + ", " + data.area,
      pickup_datetime: data?.pickupDate,
    };
    console.log(requestData);

    http
      .post("orders/", requestData)
      .then((response) => {
        if (response.status == 201) {
          Swal.fire({
            icon: "success",
            title: "Successfully placed order",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        } else {
          if (data.error?.includes("duplicate key error")) {
            return Swal.fire({
              icon: "error",
              title: "Failed...",
              text: ``,
            });
          }
          Swal.fire({
            icon: "error",
            title: "Failed...",
            text: `${data.error?.split(":").slice(2).join(":")}`,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" first w-[80%]  mx-auto py-20   lg:ml-[250px]"
    >
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
          <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
            <p className="mt-2 text-black font-semibold md:col-span-2">Name</p>

            <input
              type="text"
              placeholder="Name"
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
          <p className="mt-5 mb-2 text-black font-semibold md:col-span-2">
            Location
          </p>

          <div>
            <label className="floated-left">Area</label>
            <select
              {...register("area")}
              className=" text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="cars"
              id="cars"
            >
              {errors.area && (
                <span className="text-red">This field is required</span>
              )}
              <option value="Uttara">Uttara</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="New Market">New Market</option>
              <option value="Bosila">Bosila</option>
            </select>
          </div>

          <div className="">
            <input
              {...register("street", { required: true })}
              type="text"
              placeholder="Enter Street"
              className="text-black border  rounded-md pl-2 py-1 mt-2  md:col-span-3 w-[30%] mr-5 outline-none text-dark placeholder-black"
            />
            {errors.street && (
              <span className="text-red">This field is required</span>
            )}

            <input
              {...register("apartment", { required: true })}
              type="text"
              placeholder="Apartment"
              className="text-black border  rounded-md pl-2 py-1 mt-2  md:col-span-3 w-[30%] mr-5 outline-none text-dark placeholder-black"
            />
            {errors.apartment && (
              <span className="text-red">This field is required</span>
            )}
          </div>
          <div className=" w-full">
            {" "}
            <p className="mt-2">Postal Code </p>
            <input
              type="text"
              className="rounded-md border  pl-2 py-1   md:col-span-3 text-dark w-[30%]"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2"></div>

        {/* <div className="w-full">
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

        </div> */}
        {/* <div className="md:grid md:grid-cols-7 md:grid-flow-row-dense mb-2">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Waste Amount
          </p>
        </div> */}
        {/* <div className="w-[30%] flex gap-5 flex-col md:flex-row">
          <div className=" w-full">
            {" "}

            <input {...register("wasteAmount", { required: true })}
              type="number"
              className="rounded-md border pl-2 py-1   md:col-span-3 text-dark placeholder-black w-full"
            />
            {errors.wasteAmount && (
            <span className="text-red">This field is required</span>
          )}
          </div>
        </div> */}
        <div className="">
          <p className="mt-2 text-black font-semibold md:col-span-2">
            Pickup Time{" "}
          </p>
          <input
            {...register("pickupTime", { required: true })}
            type="time"
            placeholder="Pick a date"
            className=" border mr-2 rounded-md pl-2 py-1 mt-2  md:col-span-3  outline-none text-dark placeholder-black"
          />{" "}
          {errors.pickupTime && (
            <span className="text-red">This field is required</span>
          )}
          <input
            {...register("pickupDate", { required: true })}
            type="date"
            placeholder="Pick a date"
            className=" border rounded-md pl-2 py-1 mt-2  md:col-span-3  outline-none text-dark placeholder-black"
          />
          {errors.pickupDate && (
            <span className="text-red">This field is required</span>
          )}
        </div>
        {/* <div className="w-full"><h3 className="w-full text-left font-bold text-2xl mt-5 text-primary">Total amount: <span>158$</span></h3></div> */}
      </div>

      <button
        type="submit"
        className="bg-red text-white font-bold py-2 px-10 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default RequestForm;
