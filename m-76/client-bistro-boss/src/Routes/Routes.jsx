import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCarts from "../pages/Dashboard/MyCarts/MyCarts";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import Form from "../pages/Dashboard/AddItem/Form";
import ManageMenu from "../pages/Dashboard/ManageMenu/ManageMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  
    children: [
      {
        path: "mycart",
        element: <MyCarts></MyCarts>,
      },
      {
        path: "allusers",
        element: <AllUser></AllUser>,
      },
      {
        path: "additem",
        element: <Form></Form>,
      },
      {
        path: "managemenu",
        element: <ManageMenu></ManageMenu>,
      },
    ],
  },
]);
