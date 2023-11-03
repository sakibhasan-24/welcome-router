import React from "react";

export default function Login() {
  return (
    <form className="flex flex-col items-center justify-center bg-red-400 w-full md:w-1/2 mx-auto rounded-lg shadow-2xl p-2">
      <h1 className="flex items-center text-2xl gap-2 lg:text-6xl md:text-6xl font-bold text-blue-700">
        Please LogIn <span className="text-5xl">🔐</span>{" "}
      </h1>
      <input
        type="email "
        className="my-8 border-2 p-2 w-full md:w-2/3 lg:w-2/3 rounded-xl border-blue-950 shadow-xl"
        name=""
        placeholder="enter email...."
        id=""
      />
      <input
        type="password"
        className=" border-2 p-2 w-full md:w-2/3 lg:w-2/3 rounded-xl border-blue-950 shadow-xl"
        name=""
        placeholder="enter email...."
        id=""
      />
      <button className="bg-green-800 my-4 py-2 px-8 border-0  rounded-lg text-white hover:bg-green-700 duration-500">
        LogIn
      </button>
    </form>
  );
}
