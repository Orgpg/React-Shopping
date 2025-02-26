import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="border border-black p-5 grid grid-cols-6 font-mono  ">
      <div className="col-span-1">
        <img src={cart.product.image} className="h-16" alt="" />
      </div>
      <div className="col-span-3">
        <p>{cart.product.title}</p>
        <p className="text-gray-500 mt-2">Price ({cart.product.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-2">Quantity</p>
        <div className="flex gap-2">
          <button className="bg-black text-white px-2 py0.5 ">-</button>
          {cart.quantity}
          <button className="bg-black text-white px-2 py0.5 ">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-2xl mt-3">{cart.cost}</p>
      </div>
    </div>
  );
};

export default Cart;
