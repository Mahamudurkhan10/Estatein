import {
     createBrowserRouter,
  
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                    path:'/aboutUs',
                    element:<AboutUs></AboutUs>
               },
          ]
     },
]);