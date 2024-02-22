import { createContext, useEffect, useState } from "react";
import useCart from "../Hooks/UseCart";
import { useParams } from "react-router-dom";

export const Context = createContext();
const PamperContext = ({ children }) => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState({});
  const [cart, setCart] = useCart(products);
  const { category, subcategory, brand } = useParams();
  const [routes, setRoutes] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [allBookingDates, setAllBookingDates] = useState([]);


  useEffect(() => {
    fetch("https://pamper-me-backend.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
    fetch(
      `http://localhost:5000/products?category=${
        routes?.category || ""
      }&subcategory=${routes?.subcategory || ""}&brand=${routes.brand || ""}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [routes]);

  const info = {
    services,
    setServices,
    products,
    cart,
    setCart,
    setProducts,
    setRoutes,
    selectedDate,setSelectedDate,
    allBookingDates, setAllBookingDates
  };
  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export default PamperContext;
