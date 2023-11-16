import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
    const service = useLoaderData();
    // destructure service object 
    const {name,description,price,duration,availability,rating,reviews,guarantee,image} = service;
    return (
        <div className="flex justify-center h-screen items-center px-10 mx-auto">
            <div className="flex gap-2">
            <div className="md:flex-1">
                <img src={image} alt="" />
            </div>
            <div className="flex-1 pl-4">
                <h1 className="font-bold text-3xl py-4">{name}</h1>
                <p className="text-gray-800">Description: {description}</p>
                <h1>Price: ${price}</h1>
                <h1>Duration: {duration}</h1>
                <h1>Availability: {availability}</h1>
                <h1>Rating: {rating}</h1>
                <h1>Reviews: {reviews}</h1>
                <h1>Guarantee: {guarantee}</h1>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetail;