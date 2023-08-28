import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="choose-us-section">
      <h2>Why Choose Pamper Me?</h2>
      <div className="choose-us-container">
        <div className="choose-us-card">
          <img
            src="https://i.ibb.co/TRRDqh6/woman-with-makeup-brushes.jpg"
            alt="makeup expert woman"
          />
          <div>
            <h3>Trained and Supportive Experts</h3>
            <p>
              We at Pamper Me believe in working with the utmost
              professionalism. Thus, our clients are served only by
              well-experienced and skilled professionals.
            </p>
          </div>
        </div>

        <div className="choose-us-card">
          <img
            src="https://i.ibb.co/WK37QvW/palette-cosmetic-eye-shadow-different-shades-lipstick-brush-white-backdrop.jpg"
            alt="makeup expert woman"
          />
          <div>
            <h3>Genuine and Sealed Products</h3>
            <p>
              All our professionals use only top-notch products. In fact, we
              provide freedom to use your own products, where you can just call
              our professionals for the services.
            </p>
          </div>
        </div>

        <div className="choose-us-card">
          <img
            src="https://i.ibb.co/WpkBN4q/happy-girl-posing-with-her-piggy-bank.jpg"
            alt="makeup expert woman"
          />
          <div>
            <h3>Transparent and Affordable Prices</h3>
            <p>
              As we believe in 100% transparent pricing module, all our at-home
              salon and wellness services are quite affordable and
              budget-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
