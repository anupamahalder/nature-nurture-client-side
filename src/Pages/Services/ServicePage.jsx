import { Helmet } from "react-helmet";
import ServiceList from "./ServiceList";

const ServicePage = () => {
    return (
        <div className="my-16 mx-auto min-h-screen">
            <Helmet>
                <title>Nature Nurture | Service Page</title>
            </Helmet>
            <ServiceList></ServiceList>
        </div>
    );
};

export default ServicePage;