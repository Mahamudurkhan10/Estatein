import {
     createBrowserRouter,
  
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Properties from "../Pages/Properties/Properties/Properties";
import Services from "../Pages/Services/Services/Services";
import Contact from "../Pages/Contact/Contact/Contact";
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
               {
                    path:'/properties',
                    element:<Properties></Properties>
               },
               {
                    path:'/services',
                    element:<Services></Services>
               },
               {
                    path:'/contact',
                    element:<Contact></Contact>
               }
          ]
     },
]);