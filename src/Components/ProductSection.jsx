import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import products from "../data/Products";

const ProductSection = () => {
  return (
    <section className="px-10 mb-10">
      <Container>
        <p className="text-sm  mb-3 font-bold text-gray-500 font-mono">
          Available Products Lists
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
