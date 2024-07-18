import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await fetch("http://localhost:3000/api/tracks");
          return response.json();
        },
      },
      {
        path: "/infos",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
