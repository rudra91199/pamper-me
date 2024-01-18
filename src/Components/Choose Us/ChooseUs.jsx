import "./ChooseUs.css";
import face from '../../assets/Images/chooseUsIcon/face.png'
import cream from '../../assets/Images/chooseUsIcon/cream.png'
import faceMask from '../../assets/Images/chooseUsIcon/facial-massage.png'
import location from '../../assets/Images/chooseUsIcon/location.png'

const ChooseUs = () => {


  return (
    <div className="choose-us-section">
      <div>
        <h2>Why Choose Pamper Me?</h2>
        <p>
          Discover the epitome of convenience and luxury with Pamper Me – your go-to destination for at-home beauty services. Why choose us? Picture this: no more salon queues or traffic; we bring skilled makeup artists and nail technicians directly to your doorstep. Our commitment to a personalized experience sets us apart – we understand your unique style and cater to it flawlessly.

          Quality is our mantra. Pamper Me exclusively uses top-tier beauty products, ensuring a flawless finish every time. Hygiene is non-negotiable – our professionals follow stringent practices to guarantee a clean and safe beauty session in the comfort of your home.</p>

        <div className="icons-container">
            <div>
              <img src={face} alt="" />
              <br />
              <span className="icon-counts">+3500</span> <br />
              <span>Happy Clients</span>
            </div>
            <div>
              <img src={location} alt="" /><br />
              <span className="icon-counts">12</span> <br />
              <span>New Location</span>
            </div>
            <div>
              <img src={cream} alt="" /><br />
              <span className="icon-counts">+175</span> <br />
              <span>Great Employees</span>
            </div>
            <div>
              <img src={faceMask} alt="" /><br />
              <span className="icon-counts">56K</span> <br />
              <span>Happy Clients</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default ChooseUs;
