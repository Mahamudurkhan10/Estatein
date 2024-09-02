import {
     createBrowserRouter,
  
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Properties from "../Pages/Properties/Properties/Properties";
import Services from "../Pages/Services/Services/Services";
import Contact from "../Pages/Contact/Contact/Contact";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails/PropertyDetails";
import Login from "../Pages/Shared/LogIn/Login";
import Register from "../Pages/Shared/Register/Register";

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
               },
               {
                    path:'/propertyDetails/:id',
                    element: <PropertyDetails> </PropertyDetails>,
                    loader:({params}) => fetch(`http://localhost:5000/property/${params.id}`)
               },
               {
                    path:'/login',
                    element:<Login></Login>
               },
               {
                    path:'/register',
                    element:<Register></Register>
               },
              
          ]
     },
]);