import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const PamperContext = ({children}) => {
  const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("pamper-me-backend.vercel.app/services")
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          });
      }, []);
      const info = {
        services,setServices
      }
    return <Context.Provider value={info} >{children}</Context.Provider>;
};

export default PamperContext;