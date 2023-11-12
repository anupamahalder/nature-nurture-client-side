import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import PropTypes from 'prop-types';

// create a context 
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // declare a state to store the user info 
    const [user, setUser] = useState(null);
    //declare a state to know is loading when we call an asynchronous
    const [isLoading, setIsLoading] = useState(true);

    // create user with email and password 
    const createUser = (email, password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user with email and password 
    const signInUser = (email, password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // checking user persistency this is a side effect so we need useEffect to handle this
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // set user to user state 
            setUser(currentUser);
            // set isLoading false 
            setIsLoading(false);
        })
        // to avoid memory leak and clean up 
        return ()=> unSubscribe();
    },[]);

    const authInfo={
        user, createUser, isLoading, signInUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// adding proptypes 
AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}
export default AuthProvider;