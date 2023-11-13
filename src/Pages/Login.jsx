import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {BsEyeSlashFill} from 'react-icons/bs';
import {IoEyeSharp} from 'react-icons/io5';
import { useState } from "react";
const Login = () => {
    // call the custom hook to get all authcontext's info
    const {user, signInUser, createUser} = useAuth;
     // declare a state to track the visibility of password 
     const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center mb-6">
                <h1 className="text-5xl font-bold text-[#003C25]">Login Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
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
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-primary mt-2 text-white bg-green-800">Login with Google</button>
                    </div>
                </form>
                </div>
                <h1>Donot have account? <Link className="font-semibold text-red-500" to='/register'>Register</Link></h1>
            </div>
            </div>
        </div>
    );
};

export default Login;