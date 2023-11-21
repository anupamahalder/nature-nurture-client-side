import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
    return (
        <div className="mx-auto px-4">
            {/* testimonial 1  */}
            <div className="relative mb-4 md:ml-20 flex w-full max-w-[26rem] flex-col rounded-xl bg-base-200 p-2 bg-clip-border text-gray-700 shadow-none">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="tania andrew"
                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    A Garden Oasis
                    </h5>
                    <div className="flex items-center gap-0 5">
                    <Rating style={{ maxWidth: 120 }} className="pl-2" value={4.5} readOnly />
                    </div>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                    Shewar Hary <br></br>
                    13th November,2023
                </p>
                </div>
            </div>
            <div className="p-0 mb-6">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {`"Nature Nurture Gardens transformed my backyard into a garden oasis. The attention to detail and personalized approach made the entire process enjoyable. Highly recommended!"`}
                </p>
            </div>
            </div>
            {/* testimonial 2  */}
            <div className="md:flex mb-4 justify-center items-center">
            <div className="relative md:ml-20 flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent p-2 bg-clip-border text-gray-700 shadow-none">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                src="https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="tania andrew"
                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Year-Round Beauty
                    </h5>
                    <div className="flex items-center gap-0 5">
                    <Rating style={{ maxWidth: 120 }} className="pl-2" value={5} readOnly />
                    </div>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                    Tania Andrew <br />
                    21st August, 2023
                </p>
                </div>
            </div>
            <div className="p-0 mb-6">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {`"Thanks to Nature Nurture, our garden blooms with year-round beauty. Their monthly maintenance keeps everything in top shape, and the team is a pleasure to work with."`}
                </p>
            </div>
            </div>
            </div>
            {/* testimonial 3  */}
            <div className="md:flex justify-end md:mr-10">
            <div className="relative md:ml-20 flex w-full max-w-[26rem] flex-col rounded-xl bg-base-200 p-2 bg-clip-border text-gray-700 shadow-none">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="tania andrew"
                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Sustainable and Stunning
                    </h5>
                    <div className="flex items-center gap-0 5">
                    <Rating style={{ maxWidth: 120 }} className="pl-2" value={4} readOnly />
                    </div>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                    Surya Ranout <br />
                    7th April, 2023
                </p>
                </div>
            </div>
            <div className="p-0 mb-6">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {`"I appreciate Nature Nurture's commitment to sustainability. The garden design was not only stunning but also eco-friendly. I couldn't be happier with the results!"`}
                </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonials;