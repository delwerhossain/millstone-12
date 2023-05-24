import { createBrowserRouter } from "react-router-dom";
import ClientLayouts from "../Layout/ClientLayouts";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayouts></ClientLayouts>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
