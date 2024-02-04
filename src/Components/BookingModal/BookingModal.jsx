import { useRef, useState } from "react";
import "./BookingModal.css";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const BookingModal = ({
  setIsDialogOpen,
  dialogRef,
  handleClose,
  serviceId,
}) => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [ph, setPh] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email:user?.email,
      ph,
      address,
      startTime,
      endTime,
      serviceId
    };
    await fetch("https://pamper-me-backend.vercel.app/confirmBooking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setAddress("");
    setEndTime("");
    setName("");
    setStartTime("");
    setPh("");
    e.target.reset();
    handleClose();
  };

  return (
    <>
      <dialog className="bookingDialog" ref={dialogRef}>
        {/* Your modal content goes here */}
        <div className="modalTop">
          <h2>Book Now</h2>
          <button onClick={handleClose}>Close</button>
        </div>
        <div className="modalBody">
          <form onSubmit={handleBooking}>
            <div style={{ display: "flex" }}>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
                required
              />
              <input type="email" value={user?.email} />
            </div>
            <div style={{ display: "flex" }}>
              <input
                onChange={(e) => setPh(e.target.value)}
                type="number"
                placeholder="Phone Number"
                required
              />
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Full Address"
                required
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ marginLeft: "10px" }}>Start Time</p>
                <input
                  onChange={(e) => setStartTime(e.target.value)}
                  type="time"
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ marginLeft: "10px" }}>End Time</p>
                <input
                  onChange={(e) => setEndTime(e.target.value)}
                  type="time"
                  required
                />
              </div>
            </div>
            <input
              className="bookingConfirm"
              type="submit"
              value="CONFIRM BOOKING"
            />
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookingModal;
