import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../Layout/ClientLayout";
import Home from "../Pages/Home/Home";





const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout></ClientLayout>, 
        children: [
            {
                path: '/',
                element:<Home></Home> ,
            },

        ]
    },


])

export default router;