import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    // handle loading state 
    if(isLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(!user?.email){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};
// Added proptypes 
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;