import React from 'react';
import UserContext, { AuthContext } from '../component/UserContext';
import Login from '../Page/Login/Login';

const PrivateRoutes = ({children}) => {

    const {user} = UserContext(AuthContext);


    if(user && user.email)
    {
        return {children}
    }


    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default PrivateRoutes;