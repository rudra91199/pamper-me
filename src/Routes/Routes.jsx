import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../Layout/ClientLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";





const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout></ClientLayout>, 
        children: [
            {
                path: '/',
                element:<Home></Home> ,
            },
            {
                path: '/login',
                element:<Login></Login>,
            }

        ]
    },


])

export default router;