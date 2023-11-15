import { useEffect, useState } from "react";
import ImageGallery from "../../components/ImageGallery";
import Services from "../Services/Services";

const Home = () => {
    // declare state to store service data 
    const [services, setServices] = useState([]);

    // load services data 
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/services')
        .then(res=> res.json())
        .then(data =>{
            setServices(data);
            console.log(services);
        })
    },[]);
    return (
        <div>
            {/* banner section  */}
            <div className="relative">
                <img className="h-[600px] w-full object-cover object-center" 
                src="https://plus.unsplash.com/premium_photo-1681140560806-928e8b9a9a20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="" />
                 <div className="h-full w-3/4 absolute top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
                    <div className="absolute text-white top-40 left-20">
                    <h1 className="text-4xl md:text-6xl font-bold">Your <span className="text-green-400">Garden</span>, Our Priority...</h1>
                    <p className="text-4xl w-3/4 mt-6 pl-2 italic text-white drop-shadow-lg font-satisfy">Welcome to a place where your outdoor oasis is our canvas, and every plant is a masterpiece.</p>
                    </div>
                    <div className="flex gap-2 absolute bottom-36 left-20">
                        <button className="btn text-xl hover:text-black hover:bg-white">Check Services</button>
                        <button className="btn btn-outline hover:bg-white hover:text-black outline-4 text-xl text-white">Book Now</button>
                    </div>
                 </div>
            </div>
            {/* image showcase  */}
            <div className="md:my-40 px-10">
                <h1 className="text-center text-4xl font-bold font-satisfy my-10">Green Harmony by Our Team</h1>
                <ImageGallery></ImageGallery>
            </div>
            {/* service section  */}
            <div className="md:my-10">
                <h1 className="text-center text-4xl font-bold font-satisfy my-20">Nature Nurture Services</h1>
                <div className="px-10 mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 my-10">
                    {
                        services?.map(service =><Services key={service._id} service={service}></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;