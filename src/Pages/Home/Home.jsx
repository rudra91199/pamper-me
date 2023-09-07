import Banner from "../../Components/Banner/Banner";
import HomeServices from './../../Components/HomeServices/HomeServices';
import ChooseUs from './../../Components/Choose Us/ChooseUs';
import './Home.css'

const Home = () => {
    return (
    <div className="home">
            <Banner></Banner>
            <HomeServices/>
            <ChooseUs/>
        </div>
    );
};

export default Home;