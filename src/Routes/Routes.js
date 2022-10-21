import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";





export const route = createBrowserRouter([

    {
        path:'/' , element: <Main></Main>, children: [
            {
                path:'/home', element:<Home></Home>
            },
        
            {
                path: '/login', element:<Login></Login>
            },
        
            {
                path: '/register', element: <Register></Register>
            }
        ]
    },

    


])