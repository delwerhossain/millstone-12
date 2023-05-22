import { createBrowserRouter } from "react-router-dom";
import C_layouts from "../Layouts/C_layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <C_layouts></C_layouts>,
  },
]);
