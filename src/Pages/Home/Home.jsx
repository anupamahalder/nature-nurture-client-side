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
            {/* about us section  */}
            <div className="md:my-40 px-10">
                <h1 className="text-center text-4xl font-bold font-satisfy my-6">About US</h1>
                <p className="w-4/5 mx-auto mb-10 text-center">At Nature Nurture Gardens, we believe in the transformative power of nature. Our journey began with a simple yet profound idea — to create outdoor spaces that inspire, rejuvenate, and bring a sense of harmony to everyday life.</p>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h1 className="font-bold text-2xl text-center my-6">🌸 Our Story 🌸</h1>
                        <p className="text-center px-4 bg-gray-100 py-6 border border-spacing-2 border-green-800 h-[250px]">
                        Founded in 2022, Nature Nurture Gardens has evolved from a passion for gardening into a dedicated team of horticulturists and garden enthusiasts. What started as a small venture to beautify local gardens has grown into a flourishing community committed to the art of garden care and design.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl text-center my-6">🌎 Our Mission 🌎</h1>
                        <p className="text-center px-4 bg-gray-100 py-6 border border-spacing-2 border-green-800 h-[250px]">
                        We are on a mission to redefine outdoor living. Our goal is to not just clean gardens but to nurture them, fostering environments where nature and humanity coexist in perfect harmony. We believe that every garden is a canvas, waiting to be painted with the colors of life.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl text-center my-6">🌿 Connect with Us 🌿</h1>
                        <p className="text-center px-4 bg-gray-100 py-6 border border-spacing-2 border-green-800 h-[250px]">
                        Whether you are a seasoned gardener or just discovering the joys of outdoor spaces, we invite you to connect with us. Lets cultivate a world where gardens are not just spaces but expressions of life.Thank you for considering Nature Nurture Gardens for your garden care needs. We look forward to being a part of your gardening adventure.
                        </p>
                    </div>
                </div>
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