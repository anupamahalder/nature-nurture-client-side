import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MainLayout = ({children}) => {
    return (
        <div>
            <div className="drawer text-[#466D21] bg-fixed">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
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
                    <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
                </div>
                {/* Page content here */}
                {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-60 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
            </div>
        </div>
    );
};
// Adding propTypes 
MainLayout.propTypes={
    children: PropTypes.node,
}
export default MainLayout;