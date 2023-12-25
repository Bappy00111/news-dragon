import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Catagore from "../pages/Home/Catagore";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/catagore/:id',
          element:<Catagore></Catagore>
        }
      ]
    },
  ]);

  export default router;