import "./ChooseUs.css";
import chooseUs from '../../assets/Images/chooseUs/beautiful-face-young-woman-with-maroon-makeup-portrait-gorgeous-girl-with-vinous-lips.jpg'

const ChooseUs = () => {


  return (
    <div className="choose-us-section">
      <div>
      <h2>Why Choose Pamper Me?</h2>

      </div>
      <img src={chooseUs} alt="" />
      {/* <div></div> */}
      
    </div>
  );
};

export default ChooseUs;
