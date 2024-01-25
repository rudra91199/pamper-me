import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const PamperContext = ({children}) => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://pamper-me-backend.vercel.app/services")
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          })
        fetch("products.json")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          })
      }, []);
      const info = {
        services,setServices,products
      }
    return <Context.Provider value={info} >{children}</Context.Provider>;
};

export default PamperContext;