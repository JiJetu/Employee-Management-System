import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // creating user with email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email & password
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google account
    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // set user information
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // logout user
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    // observing user behavior
    useEffect( () =>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        logIn,
        googleLogIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;