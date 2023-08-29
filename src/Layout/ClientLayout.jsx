import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import {useLocation} from 'react-router-dom'

const ClientLayout = () => {
    const location = useLocation();
    return (
        <div>
            <Logo ></Logo>
            <Navbar ></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default ClientLayout;