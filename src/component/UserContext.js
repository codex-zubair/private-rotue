import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase/Firebase';


export const AuthContext = createContext();


const UserContext = ({ children }) => {


    // User State

    const [user, setUser] = useState("I'm Rock");


    const auth = getAuth(app);


    // sign up by email
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
         
    }


    //Login User.
    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
    }




    const authInfo = { emailSignUp, emailLogin, user }

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;