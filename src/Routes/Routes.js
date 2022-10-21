import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Order from "../Page/Order/Order";
import Register from "../Page/Register/Register";
import PrivateRoutes from "./PrivateRoute";





export const route = createBrowserRouter([

    {
        path:'/' , element: <Main></Main>, children: [
                 
            {
                path: '/login', element:<Login></Login>
            },
        
            {
                path: '/register', element: <Register></Register>
            },

            {
                path:'/order', element: <PrivateRoutes><Order></Order></PrivateRoutes>
            },
            {
                path:'/', element: <Home></Home>
            }
        

        ]
        

    },



    {
        path: '/*',element: <div>No Route!</div>
    }



   
    


])