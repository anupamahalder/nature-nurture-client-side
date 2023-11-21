
const ContactUs = () => {
    return (
        <div className="min-h-screen my-10 mx-auto">
            {/* Contact us with form and map */}
            <div className="md:flex gap-6 justify-around mx-auto px-4">
                <div className="flex-1 rounded-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927742!2d88.34735275!3d22.53542735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700591780340!5m2!1sen!2sin" width="500" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="card shrink-0 flex-1 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-4xl font-bold font-dancingScript mt-6">Feel Free To Contact with Us!</h1>
                <form className="card-body -mt-6">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="" id="" cols="30" rows="15" placeholder="message" className="input h-24 input-bordered" required ></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;