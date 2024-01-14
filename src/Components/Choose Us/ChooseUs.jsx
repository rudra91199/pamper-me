import "./ChooseUs.css";
import chooseUs from '../../assets/Images/chooseUs/beautiful-face-young-woman-with-maroon-makeup-portrait-gorgeous-girl-with-vinous-lips.jpg'
import face from '../../assets/Images/chooseUsIcon/face.png'
import mirror from '../../assets/Images/chooseUsIcon/mirror.png'
import cream from '../../assets/Images/chooseUsIcon/cream.png'
import faceMask from '../../assets/Images/chooseUsIcon/facial-massage.png'

const ChooseUs = () => {


  return (
    <div className="choose-us-section">
      <div>
        <h2>Why Choose Pamper Me?</h2>
        <p>
          Discover the epitome of convenience and luxury with Pamper Me – your go-to destination for at-home beauty services. Why choose us? Picture this: no more salon queues or traffic; we bring skilled makeup artists and nail technicians directly to your doorstep. Our commitment to a personalized experience sets us apart – we understand your unique style and cater to it flawlessly.

          Quality is our mantra. Pamper Me exclusively uses top-tier beauty products, ensuring a flawless finish every time. Hygiene is non-negotiable – our professionals follow stringent practices to guarantee a clean and safe beauty session in the comfort of your home.</p>

        <div className="icons-container">
            <span>
              <img src={face} alt="" />
            </span>
            <span>
              <img src={mirror} alt="" />
            </span>
            <span>
              <img src={cream} alt="" />
            </span>
            <span>
              <img src={faceMask} alt="" />
            </span>
        </div>
      </div>
      <img src={chooseUs} alt="" />

    </div>
  );
};

export default ChooseUs;
