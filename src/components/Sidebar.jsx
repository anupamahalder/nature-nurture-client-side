import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
    const {user, logOut} = useAuth();
    // create a function to signout 
    const hanldeSignOut = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
          }).then((result) => {
            if (result.isConfirmed){
                logOut()
                .then(res => {
                    console.log(res.user);
                    Swal.fire({
                        title: "Logged Out!",
                        text: "You have successfully logged out!.",
                        icon: "success"
                      });
                })
                .catch(err => console.log(err.message))
            }
          });
    }

    return (
        <div className="menu p-6 w-60 min-h-full gap-4 font-agbalumo uppercase sticky bg-white top-0">
            {/* Sidebar content here */}
            <NavLink to='/' 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Home</NavLink>
            <NavLink to='/service' 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Services</NavLink>
            <NavLink to='/bookings'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Bookings</NavLink>
            <NavLink to='/contact'
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900" : ""}
            >Contact Us</NavLink>
            {
                user ? 
                <>
                <button onClick={hanldeSignOut}
                className="uppercase text-left"
                >SignOut</button>
                {
                    user?.photoURL && <div title={user?.displayName}><img className="w-10 rounded-full" src={user?.photoURL}></img></div>
                }</>
                :
                <NavLink to='/login'
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-900" : ""}
                >Login</NavLink>
            }
        </div>
    );
};

export default Sidebar;