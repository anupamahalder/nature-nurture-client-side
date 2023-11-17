import axios from "axios";
import moment from "moment";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ServiceDetail = () => {
    const {user} = useAuth();
    const service = useLoaderData();
    // destructure service object 
    const {_id,name,description,price,duration,availability,rating,reviews,guarantee,image} = service;

    // create function to handle booking service 
    const handleServiceBook = () =>{
        console.log('Booking button is clicked!');
        const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a'); // November 17th 2023, 11:03:02 am
        // console.log(currentDate);
        const userEmail = user.email;
        // console.log(userEmail);
        const booking_data = {...service,userEmail,currentDate};
        console.log(booking_data);
        axios.post('http://localhost:5000/api/v1/user/create-booking', booking_data)
        .then(data=>{
            console.log(data.data);
            if(data.data.insertedId){
                Swal.fire(
                    'Good Job',
                    'You have successfully booked the service',
                    'success'
                )
            }
        })
        .catch(err =>{
            console.log(err.message);
            Swal.fire(
                'Sorry',
                'Failed to book the service',
                'error'
            )
        })
    }
    return (
        <div className="flex justify-center md:h-screen items-center my-10 px-10 mx-auto">
            <div className="md:flex py-10 md:py-0 md:gap-2">
            <div className="md:flex-1">
                <img src={image} alt="" />
            </div>
            <div className="flex-1 pl-4">
                <h1 className="font-bold text-3xl py-4 md:pb-4 md:pt-0">{name}</h1>
                <p className="text-gray-800 mb-4"><span className="font-bold text-xl">Description:</span> {description}</p>
                <div className="space-y-1">
                <h1><span className="font-bold text-xl">Price:</span> ${price}</h1>
                <h1><span className="font-bold text-xl">Duration:</span> {duration}</h1>
                <h1><span className="font-bold text-xl">Availability:</span> {availability}</h1>
                <h1 className="flex"><span className="font-bold text-xl">Rating:</span> 
                    <Rating style={{ maxWidth: 120 }} className="pl-2" value={rating} readOnly />
                </h1>
                <h1><span className="font-bold text-xl">Reviews:</span> {reviews}</h1>
                <h1><span className="font-bold text-xl">Guarantee:</span> {guarantee}</h1>
                </div>
                <div className="mx-auto mt-4 flex justify-center items-center">
                <button onClick={handleServiceBook}
                className="btn bg-red-500 hover:bg-red-700 text-white"
                type="button"
                data-ripple-light="true">Book Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetail;