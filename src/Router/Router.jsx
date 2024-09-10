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
import Dashboard from "../LayOut/Dashboard";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ErrorPage from "../Components/ErorPage/ErrorPage";
import OurProducts from "../Pages/Dashboard/Admin/OurProperties/OurProperties";
import CreateProperty from "../Pages/Dashboard/Admin/OurProperties/CreateProperty";
import UpdateProperties from "../Pages/Dashboard/Admin/OurProperties/UpdateProperties";
import ALLUsers from "../Pages/Dashboard/Admin/AllUsers/ALLUsers";

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
     {
          path:'dashboard',
          element: <Dashboard></Dashboard>,
          
          children:[
               {
                    path:'adminHome',
                    element: <AdminHome></AdminHome>
               },{
                    path:'ourProperties',
                    element: <OurProducts></OurProducts>
               },
               {
                    path:'createProperty',
                    element:<CreateProperty></CreateProperty>
               },
               {
                    path:'updateProperties/:id',
                    element: <UpdateProperties></UpdateProperties>,
                    loader: ({params})=> fetch(`http://localhost:5000/propertyUp/${params.id}`)                              
               },
               {
                 path:'allUser',
                 element:<ALLUsers></ALLUsers>
               }
          ]
     },
     {
          path:'*',
          element:<ErrorPage/>
     }
]);