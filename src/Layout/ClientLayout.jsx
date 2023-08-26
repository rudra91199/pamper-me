import Navbar from '../Components/Navbar/Navbar';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default ClientLayout;