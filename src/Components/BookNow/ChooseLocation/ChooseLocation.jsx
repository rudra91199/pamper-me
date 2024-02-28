import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./ChooseLocation.css";
import BackNav from "../Navigation/BackNav";
import NextNav from "../Navigation/NextNav";
import { useContext } from "react";
import { Context } from "../../../Providers/PamperContext";

const ChooseLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {userData} = useContext(Context);

  const { service, employee } = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target?.city?.value;
    const apartment = e.target.apartment.value;
    const house = e.target.house.value;
    const road = e.target.road.value;
    const block = e.target.block.value;
    const area = e.target.area.value;

    const address = {
      city,apartment,house,road,block,area
    }

    navigate("/booknow/choose-date&time",{state:{service,employee,address}})
  }
  return (
    <div>
      <div className="book-now-heading-container">
        <BackNav url={"/booknow"}/>
        <h3 className="booknow-heading">Choose Location</h3>
      </div>
      <div className="book-now-details-container">
        <form id="location-form" action="" onSubmit={handleSubmit}>
          <h4 className="location-heading">City</h4>
          <select className="choose-city" name="city" id="" required>
            <option  value="">Choose a city</option>
            <option selected={userData?.city === "Dhaka"} value="Dhaka">Dhaka</option>
          </select>
          <h4 className="location-heading">Address</h4>
          <div className="book-now-address">
            <input type="text" placeholder="Apartment No." name="apartment"  defaultValue={userData?.apartment}/>
            <input type="text" placeholder="House No." name="house" defaultValue={userData?.house} required/>
            <input type="text" placeholder="Road No." name="road" defaultValue={userData?.road} required/>
            <input type="text" placeholder="Block" name="block" defaultValue={userData?.block} required/>
            <input type="text" placeholder="Area" name="area" defaultValue={userData?.defaultValue} required/>
          </div>
          
        </form>
      </div>
      <NextNav id={"location-form"} type={"submit"} url={"/booknow/choose-date&time"}/>
    </div>
  );
};

export default ChooseLocation;
