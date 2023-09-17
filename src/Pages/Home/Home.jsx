import Banner from "../../Components/Banner/Banner";
import HomeServices from './../../Components/HomeServices/HomeServices';
import ChooseUs from './../../Components/Choose Us/ChooseUs';
import './Home.css'
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Home = () => {
    const[user]= useAuthState(auth)
    console.log(user);
    return (
        <div className="home">
            <Banner></Banner>
            <HomeServices />
            <PopularProducts />
            <ChooseUs />
        </div>
    );
};

export default Home;