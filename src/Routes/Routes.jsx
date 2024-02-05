import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../Layout/ClientLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Bookings from "../Pages/Bookings/Bookings";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Category from "../Components/Category/Category";


const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout></ClientLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:slug',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/product/:slug',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/bookings',
                element: <Bookings></Bookings>
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
                children:[
                    {
                        path:":category",
                        element:<Category/>,
                        children:[
                            {
                                path:":subcategory",
                                element:<Category/>,
                                children:[
                                    {
                                        path:":brand",
                                        element:<Category/>
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

        ]
    }


])

export default router;