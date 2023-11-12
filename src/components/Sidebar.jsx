import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="menu p-6 w-60 min-h-full gap-4 font-agbalumo uppercase sticky bg-white top-0">
            {/* Sidebar content here */}
            <NavLink to='/' 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Home</NavLink>
            <NavLink to='/about'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >About</NavLink>
            <NavLink to='/contact'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Contact Us</NavLink>
            <NavLink to='/login'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Login</NavLink>
            <NavLink to='/register'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Register</NavLink>
        </div>
    );
};

export default Sidebar;