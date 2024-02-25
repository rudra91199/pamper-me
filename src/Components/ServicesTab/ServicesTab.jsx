import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ServicesTab.css";
import { useEffect } from "react";

const ServicesTab = ({services,selectedTab,setSelectedTab,name}) => {
    const uniqueCategories = name &&  [...new Set(services?.map(service => service.category))];
    const navigate = useNavigate();
    const {category}= useParams();

    useEffect(()=>{
        setSelectedTab(category)
    },[category])
    return (
        <div className={`tab-container ${name ? "scroll-service":"servicesTab"}`}>
            {(name ? uniqueCategories : services)?.map(uniqueTab => <button key={uniqueTab} 
            onClick={()=>{
                setSelectedTab(uniqueTab)
                name!='services' && navigate(`/shop/${uniqueTab}`)
        }} 
            className={`${selectedTab==uniqueTab?"selected":""}`}>{uniqueTab?.toUpperCase()}</button>)}
        </div>
    );
};

export default ServicesTab;
