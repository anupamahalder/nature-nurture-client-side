import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
    // usecontext returns an object 
    const authUtils = useContext(AuthContext);
    // return that object 
    return authUtils;
};

export default useAuth;