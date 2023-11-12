import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from '../components/Sidebar';
const MainLayout = ({children}) => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <div className="drawer text-[#003C25] bg-fixed">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar></Navbar>
                {/* Page content here */}
                {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <Sidebar></Sidebar>
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