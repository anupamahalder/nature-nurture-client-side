import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ContactUs = () => {
    const handleContactForm = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const message = e.target.message.value;

        Swal.fire({
            title: 'Thanks',
            text: "We're Happy to get your email!",
            icon: "success"
        })
        console.log(email, message);
        e.target.reset();
    }
    return (
        <div className="min-h-[90vh] my-10 mx-auto flex justify-center items-center">
            <Helmet>
                <title>Nature Nurture | Contact Us</title>
            </Helmet>
            {/* Contact us with form and map */}
            <div className="">
            <div className="md:flex gap-6 justify-around mx-auto px-4">
                <div className="flex-1 rounded-xl w-[350px] mx-auto h-[200px] md:h-[450px] md:w-[500px] pb-10 md:pb-0">
                <iframe className="w-full h-full rounded-2xl"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927742!2d88.34735275!3d22.53542735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700591780340!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="card shrink-0 flex-1 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <h1 className="text-center text-2xl md:text-4xl font-bold font-dancingScript mt-6">Feel Free To Contact with Us!</h1>
                <form onSubmit={handleContactForm}
                className="card-body -mt-6">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="message" id="" cols="30" rows="15" placeholder="message" className="input h-24 input-bordered" required ></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;