import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const ClientLayout = () => {
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default ClientLayout;