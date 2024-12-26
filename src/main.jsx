import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./Components/Errorpage/Errorpage";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Dashboard from "./Components/Dashboard/Dashboard";
import Contact from "./Components/Contact/Contact";
import Root from "./Components/Root/Root";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { DashboardProvider } from "./Components/DashboardContext/DashboardContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const categoriesResponse = await fetch("/Categories.json");
          const productsResponse = await fetch("/Products.json");
          const categories = await categoriesResponse.json();
          const products = await productsResponse.json();
          return { categories, products };
        },
      },
      {
        path: "Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({params})=>{
          const res = await fetch("/Products.json")
          const data = await res.json()
          console.log(data,params.id)
          return data;
        }
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DashboardProvider>
      <RouterProvider router={router} />
    </DashboardProvider>
    <ToastContainer position="top-center" autoClose={1000} />
  </StrictMode>
);
