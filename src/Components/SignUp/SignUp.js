import { Divider } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import AuthUser from "../../Hooks/AuthUser";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { getToken } = AuthUser();
  if (getToken()) {
    return navigate("/dashboard");
  }

  const handleSignUp = (data) => {
    console.log(data);
    const signUpData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      city: data.city,
    };
    console.log(signUpData);

    fetch("http://143.110.248.164:8000/api/v1/account/register/client/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    })
      .then((response) => {
        if (response.status == 201) {
          Swal.fire({
            icon: "success",
            title:
              "Successfully created Account, check your gmail for verification",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard");
        } else {
          if (data.error?.includes("duplicate key error")) {
            return Swal.fire({
              icon: "error",
              title: "Failed...",
              text: `you have already account`,
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
  // createUser(data.email, data.password);

  //save user info

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
          <p className="mt-2 text-black font-semibold md:col-span-2">City</p>
          <input
            {...register("city", { required: true })}
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
