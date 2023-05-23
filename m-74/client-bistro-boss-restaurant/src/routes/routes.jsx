import { createBrowserRouter } from "react-router-dom";
import ClientLayouts from "../Layouts/ClientLayouts";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayouts></ClientLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  },
]);
