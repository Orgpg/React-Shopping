import React from "react";

const CategoryButton = ({ CategoryName, current }) => {
  return (
    <button
      className={`${
        current && "bg-black text-white"
      } border text-nowrap rounded border-gray-500 px-2 py-1 me-4 font-mono`}
    >
      {CategoryName}
    </button>
  );
};

export default CategoryButton;
