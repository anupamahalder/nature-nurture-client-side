
const Banner = () => {
    return (
        <div className="relative">
                <img className="h-[400px] md:h-[600px] w-full object-cover object-center" 
                src="https://plus.unsplash.com/premium_photo-1681140560806-928e8b9a9a20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="" />
                <div className="absolute flex justify-center items-center top-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)100%]">
                    <div className="mx-auto justify-center">
                    <div className="text-white pl-4 md:pl-10">
                    <h1 className="text-4xl md:text-6xl font-bold">Your <span className="text-green-400">Garden</span>, Our Priority...</h1>
                    <p className="text-2xl md:text-4xl w-3/4 mt-6 pl-2 italic text-white drop-shadow-lg font-satisfy">Welcome to a place where your outdoor oasis is our canvas, and every plant is a masterpiece.</p>
                    </div>
                    <div className="mt-4 md:mt-10 ml-4 md:ml-16">
                        <button className="btn md:text-xl hover:bg-green-300 hover:text-black mr-2">Check Services</button>
                        <button className="btn btn-outline hover:bg-white hover:text-black outline-4 md:text-xl text-white">Book Now</button>
                    </div>
                    </div>
                 </div>
            </div>
    );
};

export default Banner;