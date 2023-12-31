import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    // destructure services 
    const {_id,name,description,price,duration,availability,rating,reviews,guarantee,image} = service;
    return (
        <div className='mb-16 mx-auto'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-80 md:w-[360px] rounded-xl bg-clip-border">
            <div className="relative h-[200px] mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                src={image}
                />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 h-[50px]">
                {name}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit h-[130px] overflow-hidden">
                {description}
                </p>
                <p className='font-bold p-2'>Price: ₹ {price}</p>
            </div>
            <div className="p-6 pt-0 mx-auto">
                <Link to={`/service-detail/${_id}`}>
                <button
                className="btn bg-[#0bf446] hover:bg-green-600 hover:scale-105 hover:text-white"
                type="button"
                >
                See Details
                </button>
                </Link>
            </div>
            </div>
        </div>
    );
};
// Adding propTypes 
Services.propTypes ={
    service: PropTypes.object.isRequired,
}
export default Services;