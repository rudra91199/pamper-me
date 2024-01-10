import "./ServicesTab.css";

const ServicesTab = ({selectedTab,setSelectedTab}) => {
    return (
        <div className="servicesTab">
            <button onClick={()=>setSelectedTab(1)} className={`${selectedTab==1?"selected":""}`}>Facial</button>
            <button onClick={()=>setSelectedTab(2)} className={`${selectedTab==2?"selected":""}`}>Bridal</button>
            <button onClick={()=>setSelectedTab(3)} className={`${selectedTab==3?"selected":""}`}>Party</button>
            <button onClick={()=>setSelectedTab(4)} className={`${selectedTab==4?"selected":""}`}>Manicure</button>
            <button onClick={()=>setSelectedTab(5)} className={`${selectedTab==5?"selected":""}`}>Padicure</button>
            <button onClick={()=>setSelectedTab(6)} className={`${selectedTab==6?"selected":""}`}>Massage</button>
        </div>
    );
};

export default ServicesTab;