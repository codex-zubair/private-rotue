import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../component/UserContext';


const Login = () => {



    const  {emailLogin} = useContext(AuthContext)


    const formSubmit = (event) => {

        event.preventDefault()


        const form = event.target;
        const email = form.name.value;
        const password = form.password.value;

        emailLogin(email,password)
        .then(result=> console.log("login"))
        .catch(error=> console.log("error"));
   
    }






    return (
        <form onSubmit={formSubmit}>
            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>



                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="text" name='name' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default Login;