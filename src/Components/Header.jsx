import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-10">
      <Container>
        <div className="flex justify-between border-b border-gray-500 py-2">
          <Link to ={"/"} className="text-3xl font-bold font-mono">Online Shop</Link>
          <Link to={"/MyCart"} className="border rounded border-black px-2 py-2 font-bold font-mono relative">
            My Cart
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block rounded-full bg-red-600 px-2 text-white ">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
