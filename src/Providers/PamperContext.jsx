import { createContext } from "react";

export const Context = createContext();
const PamperContext = ({children}) => {
    return <Context.Provider value={} >{children}</Context.Provider>;
};

export default PamperContext;