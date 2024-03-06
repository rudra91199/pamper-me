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
import BookNow from "../Pages/BookNow/BookNow";
import ChooseEmployee from "../Components/BookNow/ChooseEmployee/ChooseEmployee";
import ChooseLocation from "../Components/BookNow/ChooseLocation/ChooseLocation";
import ChooseDate_Time from "../Components/BookNow/ChooseDate_Time/ChooseDate_Time";
import Recurring from "../Components/BookNow/Recurring/Recurring";
import RecurringDates from "../Components/BookNow/RecurringDates/RecurringDates";
import Checkout from "../Components/BookNow/Checkout/Checkout";
import SearchProducts from "../Pages/SearchProducts/SearchProducts";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ConfirmedBooking from "../Components/BookNow/ConfirmedBooking/ConfirmedBooking";
import ViewCart from "../Pages/ViewCart/ViewCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout></ClientLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:slug",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/product/:slug",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/booknow",
        element: <BookNow />,
        children: [
          {
            path: "/booknow",
            element: <ChooseEmployee />,
            index: true,
          },
          {
            path: "choose-location",
            element: <ChooseLocation />,
          },
          {
            path: "choose-date&time",
            element: <ChooseDate_Time />,
          },
          {
            path: "recurring",
            element: <Recurring />,
          },
          {
            path: "recurring-dates",
            element: <RecurringDates />,
          },
          {
            path: "checkout/:serviceName",
            element: <Checkout />,
          },
          {
            path: "bookingConfirmed/:serviceName",
            element: <ConfirmedBooking />,
          },
        ],
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
        children: [
          {
            path: ":category",
            element: <Category />,
            children: [
              {
                path: ":subcategory",
                element: <Category />,
                children: [
                  {
                    path: ":brand",
                    element: <Category />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/searchProducts",
        element: <SearchProducts />,
      },
      {
        path:"/cart",
        element:<ViewCart/>
      }
    ],
  },
]);

export default router;
