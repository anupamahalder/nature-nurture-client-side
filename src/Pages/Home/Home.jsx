import { useEffect, useState } from "react";
import ImageGallery from "../../components/ImageGallery";
import Services from "../Services/Services";
import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";

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
            <Banner></Banner>
            {/* image showcase  */}
            <div className="md:my-40 px-10">
                <h1 className="text-center text-4xl font-bold font-satisfy my-10">Green Harmony by Our Team</h1>
                <ImageGallery></ImageGallery>
            </div>
            {/* about us section  */}
            <AboutUs></AboutUs>
            {/* service section  */}
            <div className="md:my-10 px-2 mx-auto">
                <h1 className="text-center text-4xl font-bold font-satisfy my-20">Nature Nurture Services</h1>
                <div className="px-2 md:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
                    {
                        services?.map(service =><Services key={service._id} service={service}></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;