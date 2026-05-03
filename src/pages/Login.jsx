import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError]= useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                navigate ( location?.state? location.state : "/" );
            })
            .catch((err) => {
               setError({...error, login: err.code});
            });

    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="font-semibold text-2xl text-center  ">Login your account</h2>
                <hr className=" text-base-300 mt-5 " />
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label" required>Email Address</label>
                        <input name="email" type="email" className="input w-full" autoComplete="username" placeholder="Enter your email address" required />
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" autoComplete="current-password" placeholder="Enter your password"/>
                        {
                            error.login && (
                            <label className="label text-sm text-red-500">
                            {error.login}    
                            </label>

                        )}
                        <label className="label"><a className="link link-hover">Forgot password?</a></label>
                        <button className="btn btn-neutral rounded-none mt-4">Login</button>
                    </form>
                    <h4 className="text-neutral-500 font-semibold text-center">Don’t Have An Account ? <Link to="/auth/register" className="text-red-600">Register</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;