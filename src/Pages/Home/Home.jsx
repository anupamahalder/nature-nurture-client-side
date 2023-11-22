import ImageGallery from "../../components/ImageGallery";
import Banner from "../../components/Banner";
import AboutUs from "../../components/AboutUs";
import Testimonials from "../../components/Testimonials";
import {Helmet} from "react-helmet";
import ServiceList from "../Services/ServiceList";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Nature Nurture | Home</title>
            </Helmet>
            {/* banner section  */}
            <Banner></Banner>
            {/* image showcase  */}
            <div className="md:my-40 px-10">
                <h1 className="text-center text-3xl md:text-4xl font-bold font-satisfy my-10">Green Harmony by Our Team</h1>
                <ImageGallery></ImageGallery>
            </div>
            {/* about us section  */}
            <AboutUs></AboutUs>
            {/* service section  */}
            <div className="md:my-10 px-2 mx-auto">
                <h1 className="text-center text-3xl md:text-4xl font-bold font-satisfy my-20">Nature Nurture Services</h1>
                <ServiceList></ServiceList>
            </div>
            {/* Testimonial section     */}
            <div className="md:mt-10 mb-20 px-2 mx-auto">
            <h1 className="text-center text-3xl md:text-4xl font-bold font-satisfy my-20">Know From Our Customer</h1>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;