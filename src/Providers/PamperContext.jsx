import { createContext, useEffect, useState } from "react";
import useCart from "../Hooks/UseCart";

export const Context = createContext();
const PamperContext = ({children}) => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);

    useEffect(() => {
        fetch("https://pamper-me-backend.vercel.app/services")
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          })
        fetch("https://pamper-me-backend.vercel.app/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          })
      }, []);
      const info = {
        services,setServices,products,cart,setCart
      }
    return <Context.Provider value={info} >{children}</Context.Provider>;
};

export default PamperContext;