import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NextNav = ({ id, type, url, dates }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="nextnav-service-details">
      <hr />
      <div>
        <div>
          <img src={location.state?.service?.img} alt="" />
          <h3>{location.state?.service?.title}</h3>
        </div>
        <button
          form={id}
          type={type}
          onClick={() => {
            if (!type) {
              navigate(url, {
                state: {
                  ...location.state,
                  dates: dates || location.state.dates,
                },
              });
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NextNav;
