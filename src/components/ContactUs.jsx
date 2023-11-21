
const ContactUs = () => {
    return (
        <div className="min-h-screen my-10">
            {/* Contact us with form and map */}
            <div className="md:flex gap-6 mx-auto px-4">
                <div className="flex-1"></div>
                <div className="card shrink-0 flex-1 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
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
                    <input type="text" placeholder="message" className="input input-bordered" required />
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