import React, { useContext } from 'react';
import { AuthContext } from '../../component/UserContext';

const Home = () => {

    const { user } = useContext(AuthContext);


    return (
        <div>
            <h1>This HOME {user}</h1>
        </div>
    );
};

export default Home;