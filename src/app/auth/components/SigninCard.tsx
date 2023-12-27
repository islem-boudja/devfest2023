"use client";
import { handleLogin } from "@/lib/api";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SigninCard({ toggleCard }: { toggleCard: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const res = await handleLogin(body.email, body.password);
      console.log(res);
      // Check for successful login
      if (res) {
        router.push("/generate"); // Redirect to '/generate' upon successful login
      } else {
        // Handle unexpected responses from handleLogin
        return alert("Login failed.");
      }
    } catch (error: any) {
      // Handle errors thrown within handleLogin
      return alert(error.message || "An error occurred during login.");
    }
  };

  return (
    <div className={`sign-in-card rounded-xl w-1/2 h-full bg-violet-900 px-16`}>
      <h1 className="text-white font-bold mb-0">Sign In</h1>
      <p>Please login to continue to your account.</p>
      <form className="sign-in-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-md p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-md my-5 p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-start items-center w-72">
          <input
            type="checkbox"
            name="check-sign-in"
            className="check-sign-in mr-2"
          />
          <label htmlFor="check-sign-in" className="text-white check-sign-in">
            Keep me logged in
          </label>
        </div>
        <button className="sign-in-btn rounded-md text-white font-semibold w-72 mt-5 py-1 px-4">
          Sign In
        </button>
      </form>
      <p>
        Need an account ?{" "}
        <button
          className="text-white font-semibold cursor-pointer"
          onClick={toggleCard}
        >
          {" "}
          Sign Up
        </button>
      </p>
      {/* <div className="google-auth-sep relative text-white -mt-8 w-72">
            <hr />
            <p className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Or</p>
        </div>
        <button className='google-auth-btn rounded-md font-semibold w-72 py-1 px-4 bg-white'>Sign In with Google</button> */}
    </div>
  );
}
