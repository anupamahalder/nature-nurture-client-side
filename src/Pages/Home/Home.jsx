
const Home = () => {
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
        </div>
    );
};

export default Home;