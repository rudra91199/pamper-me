import { createContext, useEffect, useState } from "react";
import useCart from "../Hooks/UseCart";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

export const Context = createContext();
const PamperContext = ({ children }) => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState({});
  const [cart, setCart] = useCart(products);
  const { category, subcategory, brand } = useParams();
  const [routes, setRoutes] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [allBookingDates, setAllBookingDates] = useState([]);
  const [profileHover, setProfileHover] = useState(false);
  const [userData, setUserData] = useState({});
  const [user] = useAuthState(auth);
  const [number,setNumber] = useState(null);

  useEffect(() => {

    fetch("https://pamper-me-backend.vercel.app/api/services/all")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });

    fetch(
      `http://pamper-me-backend.vercel.app/api/products/all?category=${
        routes?.category || ""
      }&subcategory=${routes?.subcategory || ""}&brand=${routes.brand || ""}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [routes]);

  useEffect(() => {
    if(user?.email){
      axios.get(`https://pamper-me-backend.vercel.app/api/users/${user.email}`).then((res) => setUserData(res.data));
    }
    else{
      setUserData({});
    }
  },[user])

  const info = {
    services,
    setServices,
    products,
    cart,
    setCart,
    setProducts,
    setRoutes,
    selectedDate,
    setSelectedDate,
    allBookingDates,
    setAllBookingDates,
    profileHover,
    setProfileHover,
    userData,
    number,setNumber
  };
  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export default PamperContext;
