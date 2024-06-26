import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/Main/Main";
import LogIn from "../Page/LogIn/LogIn";
import SIgnUp from "../Page/SignUp/SIgnUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "login",
          element: <LogIn></LogIn>
        },
        {
          path: "signUp",
          element:<SIgnUp></SIgnUp>
        },
        {
          path: "secrate",
          element: <PrivateRoute><h1>hi</h1></PrivateRoute>
        }
      ]
    },
  ]);

export default router;