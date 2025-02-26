import React from "react";
import products from "../data/Products";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import carts from "../data/Carts";

const CartSection = () => {


  return (
    <>
      <div className="flex flex-col gap-5 h-full">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}

        <div className="absolute bottom-10 left-0 w-full mb-10">
          <Container>
            <div className="border-t border-black flex justify-end gap-16 font-mono py-5">
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="font-bold">123</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Tax(10%)</p>
                <p className="font-bold">123</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Net Total</p>
                <p className="font-bold text-2xl">123</p>
              </div>
            </div>
            <div className="text-end mb-5">
              <Link className="border border-black rounded px-3 py-2 hover:bg-black hover:text-white font-mono">
                {" "}
                Order Now
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
