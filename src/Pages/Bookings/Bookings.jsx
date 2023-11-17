import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const {user} = useAuth();
    // declare a state to store bookings data 
    const [bookedItems, setBookedItems] = useState([]);
    // set a dynamic url 
    const url = `http://localhost:5000/api/v1/bookings-data?email=${user?.email}`;
    // load data 
    useEffect(()=>{
        axios.get(url)
        .then(data=>{
            console.log(data.data);
            setBookedItems(data.data);
        })
    },[]);
    return (
        <div className="mx-auto px-2 my-20 min-h-screen">
            <h1 className="font-bold text-center text-2xl text-[#003C25]">Total Booked Services: {bookedItems.length}</h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Service Image</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th>Service Available Date</th>
                        <th>Satus</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        bookedItems.map(booking=><BookingRow key={booking._id} booking={booking}></BookingRow>)
                    }
                    </tbody>        
                </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;