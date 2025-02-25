import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Products";
import Container from "../Components/Container";
import Rating from "../Components/Rating";
import Breadcrumbs from "../Components/Breadcrumbs";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find(
    (product) => product.id === Number(productId)
  );

  // console.log(currentProduct);

  return (
    <Container>
      <Breadcrumbs currentPageTitle= "Product Detail" />
      <div className="border border-black p-10 mb-10 ">
        <div className="grid grid-cols-2">
          <div className="col-snap-1">
            <img
              src={currentProduct.image}
              className="w-2/5 mx-auto hover:scale-125 "
              alt=""
            />
          </div>
          <div className="col-snap-1 font-bold font-mono flex flex-col items-start gap-5">
            <h3 className="font-bold font-mono text-2xl">
              {currentProduct.title}
            </h3>
            <p className="inline-block bg-gray-200 rounded px-2 py-1">
              ${currentProduct.category}
            </p>
            <p className="">{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full items-center">
              <p>${currentProduct.price}</p>
              <button className="border text-xs border-black rounded px-2 py-2 hover:bg-black hover:text-white ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;

// React Router Special Function - const { product } = useParams();
