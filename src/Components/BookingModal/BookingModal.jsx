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
      </dialog>
    </>
  );
};

export default BookingModal;
