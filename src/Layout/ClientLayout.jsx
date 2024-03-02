import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';

const ClientLayout = () => {
    const location = useLocation();
    const navigate= useNavigate();

    

    return (
        <div>
        {
            (location.pathname==="/" || location.pathname==="/home")&&
            <Logo ></Logo>
        }
            <Navbar ></Navbar>
            <Outlet/>
            
            <Footer></Footer>
        </div>
    );
};

export default ClientLayout;