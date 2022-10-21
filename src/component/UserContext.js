import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase';


export const AuthContext = createContext();


const UserContext = ({ children }) => {


    // User State

    const [user, setUser] = useState();




    const auth = getAuth(app);


    // sign up by email
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    //Login User.
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }


    // Logout 
    const logOut = () => {
        return signOut(auth)
    }




    // useEffect

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("auth state Change:", currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])




    const authInfo = { emailSignUp, emailLogin, logOut, user}

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;