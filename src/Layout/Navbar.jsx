import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
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
        <div className="w-full navbar bg-white shadow-lg">
        <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div> 
        <div className="flex-1 px-2 mx-2 absolute right-1 md:relative">
            <img className='w-[50px]'
                src="./../../public/natureLight.png" alt="" />
            <h1 className='font-extrabold ml-2 text-3xl font-dancingScript'>Nature Nurture</h1>
        </div>
        <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal gap-6 text-xl justify-center items-center font-satisfy uppercase">
            {/* Navbar menu content here */}
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
                className="uppercase"
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
        </div>
        </div>
    );
};

export default Navbar;