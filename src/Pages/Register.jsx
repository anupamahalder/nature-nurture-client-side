import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import {BsEyeSlashFill} from 'react-icons/bs';
import {IoEyeSharp} from 'react-icons/io5';
import { Helmet } from "react-helmet";

const Register = () => {
    // call the custom hook to get all authcontext's info
    const {user,createUser} = useAuth();
    // declare a state to track the visibility of password 
    const [isVisible, setIsVisible] = useState(false);
    // declare states to control form 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // create function to handle register 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await createUser(email, password);
            console.log('created', user);
        }
        catch(err){
            console.log(err.message);
        }
    }
    return (
        <div>
            <Helmet>
                <title>Nature Nurture | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-6">
                <h1 className="text-5xl font-bold text-[#003C25]">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit}
                className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input onBlur={(e)=>setName(e.target.value)}
                    type="text" 
                    placeholder="name" 
                    className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onBlur={(e)=>setEmail(e.target.value)}
                    type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onBlur={(e)=>setPassword(e.target.value)}
                     type={ isVisible ? 'text': 'password'}
                     placeholder="password" className="input input-bordered" required />
                     <div onClick={()=>setIsVisible(!isVisible)} 
                     className="absolute text-[#003C25] right-4 top-12">
                     {
                        // make the type dynamic
                        isVisible ? <IoEyeSharp></IoEyeSharp> : <BsEyeSlashFill></BsEyeSlashFill>
                    }
                     </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                </div>
                <h1>Already have account? <Link className="font-semibold text-red-500" to='/login'>Login</Link></h1>
            </div>
            </div>
        </div>
    );
};

export default Register;