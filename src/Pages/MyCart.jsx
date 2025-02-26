import React from "react";
import Container from "../Components/Container";
import Breadcrumbs from "../Components/Breadcrumbs";
import CartSection from "../Components/CartSection";

const MyCart = () => {
  return <div>
    <Container className={"flex-grow"}>
      <Breadcrumbs currentPageTitle= "My Cart" />
      <CartSection/>  
    </Container>
  </div>;
};

export default MyCart;
