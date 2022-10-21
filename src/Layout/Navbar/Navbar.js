import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-purple-500">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to= '/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;