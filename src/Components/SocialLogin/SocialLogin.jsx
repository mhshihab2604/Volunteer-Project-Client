import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { GrGooglePlus } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";

const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
    
    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            if(result.user) {
               navigate(from);
            }
        })
    }

    return (
        <div>
            <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={()=> handleSocialLogin(googleLogin)} aria-label="Log in with Google" className="p-2 border-2 rounded-full hover:bg-[#38AA95] hover:text-white">
                        <GrGooglePlus className="text-xl shadow-2xl"></GrGooglePlus>
                    </button>
                    <button onClick={()=>handleSocialLogin(githubLogin)} aria-label="Log in with GitHub" className="p-2 border-2 rounded-full hover:bg-[#38AA95] hover:text-white">
                        <AiOutlineGithub className="text-xl shadow-2xl"></AiOutlineGithub>
                    </button>
                </div>
        </div>
    );
};

export default SocialLogin;