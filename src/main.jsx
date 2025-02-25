import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/Router";


// const categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];

const root = document.querySelector("#root");


//vie react rander
createRoot(root).render(<RouterProvider router={router} />);


//

// View react node

// type , props, children
// const app = createElement(
//   "div",
//   { id: "category-section", className: "p-5" },
//   createElement(
//     "p",
//     { className: "text-3xl font-bold text-gray-500 font-mono" },
//     "Product Categories"
//   ),
//   createElement(
//     "div",
//     null,
//     categories.map((category) =>
//       createElement(
//         "button",
//         { className: "border rounded border-gray-500 p-2 me-3 font-mono" },
//         category
//       )
//     )
//   )
// );



// const title = document.createElement("p");

// title.innerText = "Product Categories";
// title.classList.add("text-3xl", "font-bold", "text-gray-500","font-mono");

// const CategoryButton = (CategoryName) => {
//   const btn = document.createElement("button");
//   btn.innerText = CategoryName;
//   btn.classList.add("border","rounded", "border-gray-500", "p-2", "m-2","font-mono");
//   return btn;
// };

// root.append(title);

// Categories.forEach((category) => {
//   root.append(CategoryButton(category));
// });
