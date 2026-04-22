import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
             <h2 className="font-semibold mb-3">Login With</h2>
             <div className="flex flex-col space-y-2">
                <button className="btn  w-full"> <FaGoogle>
                    </FaGoogle> Login with Google</button>
                <button className="btn  w-full"> <FaGithub></FaGithub> Login with Github</button>
             </div>
        </div>
    );
};

export default SocialLogin; 