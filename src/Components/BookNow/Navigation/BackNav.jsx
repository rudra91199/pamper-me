import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const BackNav = ({url}) => {
    const location = useLocation();
  const navigate = useNavigate();
  return (
    <button className="booknow-nav-btn" onClick={() => navigate(url,{
        state:location?.state
    })}>
      <FaArrowLeftLong />
    </button>
  );
};

export default BackNav;
