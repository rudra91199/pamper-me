import "./ServicesTab.css";

const ServicesTab = ({selectedTab,setSelectedTab}) => {
    return (
        <div className="servicesTab">
            <button onClick={()=>setSelectedTab("Skincare")} className={`${selectedTab=="Skincare"?"selected":""}`}>Skincare</button>
            <button onClick={()=>setSelectedTab("Massage")} className={`${selectedTab=="Massage"?"selected":""}`}>Massage</button>
            <button onClick={()=>setSelectedTab("Manicure & Pedicure")} className={`${selectedTab=="Manicure & Pedicure"?"selected":""}`}>Manicure & Pedicure</button>
            <button onClick={()=>setSelectedTab("Body Polish")} className={`${selectedTab=="Body Polish"?"selected":""}`}>Body Polish</button>
            <button onClick={()=>setSelectedTab("Hair Cut")} className={`${selectedTab=="Hair Cut"?"selected":""}`}>Hair Cut</button>
            <button onClick={()=>setSelectedTab("Hair Color")} className={`${selectedTab=="Hair Color"?"selected":""}`}>Hair Color</button>
            <button onClick={()=>setSelectedTab("Hair Straightening")} className={`${selectedTab=="Hair Straightening"?"selected":""}`}>Hair Straightening</button>
            <button onClick={()=>setSelectedTab("Hair Treatment")} className={`${selectedTab=="Hair Treatment"?"selected":""}`}>Hair Treatment</button>
            <button onClick={()=>setSelectedTab("Makeover")} className={`${selectedTab=="Makeover"?"selected":""}`}>Makeover</button>
        </div>
    );
};

export default ServicesTab;