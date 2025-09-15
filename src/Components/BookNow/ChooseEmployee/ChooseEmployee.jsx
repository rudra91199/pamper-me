import React, { useContext } from "react";
import "./ChooseEmployee.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../../Providers/PamperContext";

const ChooseEmployee = () => {
  const { employees } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const { service } = location.state;

  return (
    <div>
      <div className="book-now-heading-container">
        <h3 className="booknow-heading">Choose Employee</h3>
      </div>
      <div className="book-now-details-container">
        <div className="employee-details">
          <div className="employee-content">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oKSL0-wIXqCq8R340_-aa-Ehb-aEgcTshrUu6htFHA&s"
                alt=""
              />
              <h3>Amy Employee</h3>
            </div>
            <button
              className="book-now-btn"
              onClick={() =>
                navigate("/booknow/choose-location", {
                  state: {
                    service,
                    employee: {
                      name: "Any Employee",
                    },
                  },
                })
              }
            >
              Choose
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
            aliquam in expedita iure? Ullam adipisci reprehenderit quibusdam.
            Voluptatum rem iure atque labore nisi facilis eum laudantium commodi
            tempore quasi. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quaerat, minima!
          </p>
        </div>
        {employees?.map((employee, i) => (
          <div className="employee-details" key={i}>
            <div className="employee-content">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oKSL0-wIXqCq8R340_-aa-Ehb-aEgcTshrUu6htFHA&s"
                  alt=""
                />
                <h3>{employee.name}</h3>
              </div>
              <button
                className="book-now-btn"
                onClick={() =>
                  navigate("/booknow/choose-location", {
                    state: {
                      service,
                      employee: {
                        name: employee.name,
                        id:employee._id
                      },
                    },
                  })
                }
              >
                Choose
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              esse aliquam in expedita iure? Ullam adipisci reprehenderit
              quibusdam. Voluptatum rem iure atque labore nisi facilis eum
              laudantium commodi tempore quasi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quaerat, minima!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseEmployee;
