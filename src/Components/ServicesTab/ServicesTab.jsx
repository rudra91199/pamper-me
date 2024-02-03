import "./ServicesTab.css";

const ServicesTab = ({services,selectedTab,setSelectedTab}) => {
    const uniqueCategories = [...new Set(services.map(service => service.category))];
    return (
        <div className="servicesTab">
            {uniqueCategories.map(uniqueTab => <button key={uniqueTab} onClick={()=>setSelectedTab(uniqueTab)} 
            className={`${selectedTab==uniqueTab?"selected":""}`}>{uniqueTab}</button>)}
        </div>
    );
};

export default ServicesTab;