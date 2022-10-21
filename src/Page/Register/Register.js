import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../Firebase/Firebase';





const Register = () => {


    const  {emailSignUp} = useContext(app)

    const submitForm = (event) => {
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        
        emailSignUp(email,password);

        

    }






    return (
        <form onSubmit={submitForm}>
            <div className="hero min-h-screen bg-base-200">


                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>



                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input  type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Already Have An Account</Link>
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

export default Register;