import { useRef } from "react";
import "./BookingModal.css";
const BookingModal = ({ setIsDialogOpen, dialogRef, handleClose }) => {
  return (
    <>
      <dialog className="bookingDialog" ref={dialogRef}>
        {/* Your modal content goes here */}
        <div className="modalTop">
          <h2>Book Now</h2>
          <button onClick={handleClose}>Close</button>
        </div>
        <div className="modalBody">
            <form>
              <input type="text" placeholder="Full Name"/>
              <input type="email" placeholder="Email"/>
              <input type="number" placeholder="Phone Number"/>
              <input type="text" placeholder="Full Address"/>
              <p>Start Time</p>
              <input type="time"/>
              <p>End Time</p>
              <input type="time"/>
              <input type="submit"/>
            </form>
        </div>
      </dialog>
    </>
  );
};

export default BookingModal;
