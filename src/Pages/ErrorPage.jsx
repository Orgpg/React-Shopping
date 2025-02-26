import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className=" ">
        <img src="./404page.svg" className="w-96" alt="" />
        {/* <h1 className="text-3xl font-bold font-mono mb-5">404 Not Found</h1> */}
        <Link
          to={"/"}
          className="border border-black rounded px-2 py-1 hover:bg-black hover:text-white font-mono font-bold "
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
