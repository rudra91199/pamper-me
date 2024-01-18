import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import PamperContext from "./Providers/PamperContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PamperContext>
      <RouterProvider router={router}></RouterProvider>
    </PamperContext>
  </React.StrictMode>
);
