import './Bookings.css'
const Bookings = () => {
    return (
        <div className='bookings'>
            <input type='number' placeholder='Please enter your phone number'/>
            <button className='searchBookingBtn'>Search Bookings</button>
        </div>
    );
};

export default Bookings;