import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ currentPageTitle }) => {
  return (
    <div className="flex gap-2 w-full mb-3 font-mono ">
      <Link className="text-black" to="/">Home</Link> <span> / </span>
      <p className="text-blue-700 font-bold">{currentPageTitle}</p>
    </div>
  );
};

export default Breadcrumbs;
