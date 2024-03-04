import { useState } from "react";
import "./AdditionalInformation.css";
import ProductDescription from "./ProductDescription";
import HowToUse from "./HowToUse";
import ProductReviews from "./ProductReviews";

const AdditionalInformation = ({product}) => {
  const [selectedTab, setselectedTab] = useState(1);
  return (
    <div className="additional-info">
      <div className="additional-info-tabs">
        <button
          onClick={() => setselectedTab(1)}
          className={`tab ${selectedTab === 1 && "tab-active"}`}
        >
          Description
        </button>
        <button
          onClick={() => setselectedTab(2)}
          className={`tab ${selectedTab === 2 && "tab-active"}`}
        >
          How to use
        </button>
        <button
          onClick={() => setselectedTab(3)}
          className={`tab ${selectedTab === 3 && "tab-active"}`}
        >
          Reviews
        </button>
      </div>
      <hr />
      <div className="additional-info-content">
      {selectedTab === 1 && <ProductDescription product={product}/>}
        {selectedTab === 2 && <HowToUse product={product}/>}
        {selectedTab === 3 && <ProductReviews product={product}/>}
      </div>
    </div>
  );
};

export default AdditionalInformation;
