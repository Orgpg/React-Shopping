import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import MyCart from "../Pages/MyCart";
import ProductDetail from "../Pages/ProductDetail";
import MainLayout from "../Components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/MyCart",
        element: <MyCart />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;


// Dynamic Route - 
// path: "/product-detail/:productId",
