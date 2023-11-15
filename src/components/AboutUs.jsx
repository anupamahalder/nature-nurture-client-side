
const AboutUs = () => {
    return (
        <div className="md:my-40 px-10">
            <h1 className="text-center text-4xl font-bold font-satisfy my-6">About US</h1>
            <p className="w-4/5 mx-auto mb-10 text-center">At Nature Nurture Gardens, we believe in the transformative power of nature. Our journey began with a simple yet profound idea — to create outdoor spaces that inspire, rejuvenate, and bring a sense of harmony to everyday life.</p>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h1 className="font-bold text-2xl text-center my-6">🌸 Our Story 🌸</h1>
                    <p className="text-center px-4 bg-gray-100 py-3 md:py-6 border border-spacing-2 border-green-800 h-[250px] overflow-hidden">
                    Founded in 2022, Nature Nurture Gardens has evolved from a passion for gardening into a dedicated team of horticulturists and garden enthusiasts. What started as a small venture to beautify local gardens has grown into a flourishing community committed to the art of garden care and design.
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl text-center my-6">🌎 Our Mission 🌎</h1>
                    <p className="text-center px-4 bg-gray-100 py-3 md:py-6 border border-spacing-2 border-green-800 h-[250px] overflow-hidden">
                    We are on a mission to redefine outdoor living. Our goal is to not just clean gardens but to nurture them, fostering environments where nature and humanity coexist in perfect harmony. We believe that every garden is a canvas, waiting to be painted with the colors of life.
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl text-center my-6">🌿 Connect with Us 🌿</h1>
                    <p className="text-center px-4 bg-gray-100 py-3 md:py-6 border border-spacing-2 border-green-800 h-[250px] overflow-hidden">
                    Whether you are a seasoned gardener or just discovering the joys of outdoor spaces, we invite you to connect with us. Lets cultivate a world where gardens are not just spaces but expressions of life.Thank you for considering Nature Nurture Gardens for your garden care needs. We look forward to being a part of your gardening adventure.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;