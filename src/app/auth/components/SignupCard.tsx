import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected from 'next/navigation' to 'next/router'
import { handleSignUp } from "@/lib/api";

export default function SignupCard({ toggleCard }: { toggleCard: any }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await handleSignUp({ fullname, username, email, password });
      if (res && res.status === 201) {
        router.push("/generate"); // Redirect upon successful sign-up
      } else {
        throw new Error("Sign-up failed. Invalid response received."); // Throw an error if response is not as expected
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during sign-up.");
    }
  };

  return (
    <div className="sign-in-card sign-up-card rounded-xl w-1/2 min-h-90 bg-violet-900 px-16 pb-20">
      <h1 className="text-white font-bold mb-0">Sign up</h1>
      <p>Sign up to enjoy the feature of Taleo</p>
      {error && <p>Error: {error}</p>}
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Fullname"
          className="rounded-md p-2 my-3"
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-md p-2 my-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="rounded-md p-2 my-3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-md my-3 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="sign-in-btn rounded-md text-white font-semibold w-72 mt-3 py-1 px-4"
        >
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button
          className="text-white font-semibold cursor-pointer"
          onClick={toggleCard}
        >
          {" "}
          Sign In
        </button>
      </p>
    </div>
  );
}
