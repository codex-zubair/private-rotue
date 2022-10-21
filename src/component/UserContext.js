import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from '../Firebase/Firebase';

export const AuthContext = createContext();


const UserContext = ({children}) => {


    const auth = getAuth(app);
    

    // sign up by email
    const emailSignUp = (email,password)=> 
    {
       return createUserWithEmailAndPassword(auth,email,password)
        .then(result => alert("User Created Successfully!"))
        .catch(error=> console.log(error))
    }


    //Login User.
    const emailLogin = (email,password)=> 
    {
        return signInWithEmailAndPassword(auth,email,password)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }




    const authInfo = {emailSignUp,emailLogin}

    return (
       
       
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
       
    );
};

export default UserContext;