import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Services from "../Pages/Services/Services";

       export  const router = createBrowserRouter([
            {
              path: "/",
              element: <MainLayout></MainLayout>,
              children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/products",
                    element: <Products></Products> 
                },
                {
                    path: "/services",
                    element: <Services></Services>
                },
              ]
            },
          ]);


