import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

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
            <h1>Bookings</h1>
        </div>
    );
};

export default Bookings;