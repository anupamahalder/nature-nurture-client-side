import { useEffect, useState } from "react";
import Services from "./Services";
import axios from "axios";

const ServiceList = () => {
    // declare state to store service data 
    const [services, setServices] = useState([]);

    // load services data 
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/services')
        .then(data =>{
            setServices(data.data);
        })
        // fetch('http://localhost:5000/api/v1/services')
        // .then(res=> res.json())
        // .then(data =>{
        //     setServices(data);
        // })
    },[]);
    return (
        
        <div className="px-2 md:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
            {
                services?.map(service =><Services key={service._id} service={service}></Services>)
            }
        </div>
    );
};

export default ServiceList;