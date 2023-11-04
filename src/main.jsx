import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Service from "./components/Service.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Details from "./components/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/service",
        loader: () =>
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=B`),
        element: <Service></Service>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:strMeals",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.strMeals}`
          ),
        element: <Details></Details>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
