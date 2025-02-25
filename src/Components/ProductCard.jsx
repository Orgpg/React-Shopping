import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <div className="border border-black p-5 rounded-lg flex flex-col items-start gap-3">
      <img className="h-40 hover:scale-125" src={image} alt="" />
      <p className="font-bold font-mono line-clamp-2 mb-3">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full">
        <p className="font-mono">${price}</p>
        <button className="border text-xs border-black rounded px-2 py-1 hover:bg-black hover:text-white ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// Class - line-clamp-2 က name တွေကို ရှည်လို့ ၂ ကြောင်းပဲပြတာ။
