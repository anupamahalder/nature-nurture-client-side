import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import BookingRow from "./BookingRow";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Bookings = () => {
    const {user} = useAuth();
    // declare a state to store bookings data 
    const [bookedItems, setBookedItems] = useState([]);
    // set a dynamic url 
    const url = `https://nature-nurture-server-side.vercel.app/api/v1/bookings-data?email=${user?.email}`;
    // load data 
    useEffect(()=>{
        axios.get(url)
        .then(data=>{
            console.log(data.data);
            setBookedItems(data.data);
        })
    },[url]);
    // function 
    const hanldeRemoveBtn = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('Remove button is clicked!',id);
                axios.delete(`https://nature-nurture-server-side.vercel.app/api/v1/user/delete-booking/${id}`)
                .then(data=>{
                    console.log(data.data);
                    if(data.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Successfully deleted the service",
                            icon: "success"
                        });
                        // set updated booking service 
                        const updatedService = bookedItems.filter(bookedItem => bookedItem._id != id);
                        setBookedItems(updatedService);
                    }
                    else{
                        Swal.fire({
                            title: "Sorry!",
                            text: "Failed to delete the service",
                            icon: "error"
                        });
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    Swal.fire({
                        title: "Sorry!",
                        text: "Failed to delete the service",
                        icon: "error"
                    });
                })
            }
          });
    }
    return (
        <div className="mx-auto px-2 my-20 min-h-screen">
            <Helmet>
                <title>Nature Nurture | Bookings</title>
            </Helmet>
            <h1 className="font-bold text-center mb-6 text-2xl text-[#003C25]">Total Booked Services: {bookedItems.length}</h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-sm">
                        <th>Service Image</th>
                        <th>Service Name</th>
                        <th>Booking Date</th>
                        <th>Price</th>
                        <th>Service Available Date</th>
                        <th>Satus</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        bookedItems.map(booking=><BookingRow key={booking._id} hanldeRemoveBtn={hanldeRemoveBtn} booking={booking}></BookingRow>)
                    }
                    </tbody>        
                </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;