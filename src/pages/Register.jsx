
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
     const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name")
        if (name.length < 5) {
            setError({ ...error, name: "must be more than 5 character long" });
            return;
        }

        const photo = form.get("photo")
        if (!photo.includes("http")) {
            setError({ ...error, photo: "Please provide a valid image link" });
            return;
        }


        const email = form.get("email")
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError({ ...error, email: "Please enter a valid email address" });
            return;
        }

        const password = form.get("password");
         if (password.length < 6) {
            setError({ ...error, password: "Password should be at least 6 characters" });
            return;
        }


        createNewUser(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName: name, photoURL: photo}) 
                .then(() => {
                    navigate("/")

                }).catch((err)=>{
                     setError({...error, register: err.code});
                })

                
            })
            .catch((err) => {
               setError({...error, register: err.code});
      
            });

    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="font-semibold text-2xl text-center ">Register your account</h2>
                <hr className=" text-base-300 mt-5 " />
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Your Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Enter your name" />
                        {
                            error.name && (
                                <label className="label text-xs text-red-500">
                                    {error.name}
                                </label>
                            )
                        }
                        <label className="label">Photo URL</label>
                        <input name="photo" type="text" className="input w-full" placeholder="Enter your Photo URL" />
                        {
                            error.photo && (
                                <label className="label text-xs text-red-500">
                                    {error.photo}
                                </label>
                            )
                        }
                        <label className="label">Email </label>
                        <input name="email" type="email" className="input w-full" placeholder="Enter your email address" />
                        {
                            error.email && (
                                <label className="label text-xs text-red-500">
                                    {error.email}
                                </label>
                            )
                        }

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Enter your password" autoComplete="current-password" />
                        {
                            error.password && (
                                <label className="label text-xs text-red-500">
                                    {error.password}
                                </label>
                            )
                        }
                        <button type="submit" className="btn btn-neutral rounded-none mt-4">Register</button>
                        <h4 className="text-neutral-500 font-semibold text-center">Already Have An Account ? <Link to="/auth/login" className="text-red-600">Login</Link></h4>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;