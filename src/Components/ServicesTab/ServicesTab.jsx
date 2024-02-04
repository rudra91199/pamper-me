import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ServicesTab.css";
import { useEffect } from "react";

const ServicesTab = ({services,selectedTab,setSelectedTab,name}) => {
    const uniqueCategories = [...new Set(services?.map(service => service.category))];
    const navigate = useNavigate();
    const location =useLocation();
    const {category}= useParams();

    useEffect(()=>{
        setSelectedTab(category)
    },[category])
    return (
        <div className="servicesTab">
            {uniqueCategories.map(uniqueTab => <button key={uniqueTab} 
            onClick={()=>{
                setSelectedTab(uniqueTab)
                name!='services' && navigate(`/shop/${uniqueTab}`)
        }} 
            className={`${selectedTab==uniqueTab?"selected":""}`}>{uniqueTab.toUpperCase()}</button>)}
        </div>
    );
};

export default ServicesTab;