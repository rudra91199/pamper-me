import { useState } from 'react';
import './Services.css'
import { useEffect } from 'react';
import ServicesTab from '../../Components/ServicesTab/ServicesTab';
const Services = () => {
    const [services, setServices] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [loading, setLoading] = useState(false); 

    useEffect(()=>{
        setLoading(true);
        fetch('service.json')
     .then(res=>res.json())
     .then(data=>setServices(data))
    },[])
    
    return (
        <div className='services'>
            <ServicesTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}></ServicesTab>
        </div>
    );
};

export default Services;