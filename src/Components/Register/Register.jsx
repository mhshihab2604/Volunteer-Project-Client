import { useForm } from "react-hook-form";
import useAuth from "../useAuth/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import { Helmet } from 'react-helmet';

import { GoPerson } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { LiaHandPointRightSolid } from "react-icons/lia";

import "./Register.css"
const Register = () => {
    
    const {createUser, UpdateUserProfile,refetchUser,setRefetchUser} = useAuth();
    const [registerError, setRegisterError] = useState("")
    const {register,handleSubmit,formState: { errors },} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const onSubmit = data => {
    const {email, password,image, name} = data
    
    setRegisterError("");
    if(password.length < 6){
        setRegisterError("password should be at least 6 characters or longer")
        return;
    }
    else if(!/(?=.*[a-z])(?=.*[A-Z])/.test(password)){
        setRegisterError("Your password should have at least one uppercase and one lowercase characters")
        return;
    }
    // create user and update profile
        createUser(email, password) 
        .then(() => {
            UpdateUserProfile(name, image)
            .then(() => {
                setRefetchUser(!refetchUser)
                toast.success("You have successfully register")
                navigate(from);
            })
        })
        .catch(()=>{
            setRegisterError("This email is already registered")
        })
    }

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
        
            <section>
                <div className="flex lg:flex-row flex-col justify-center items-center">
                    <div className="css bg-[#38aa95]">
                        <div className="card-body text-white space-y-5 text-center">
                            <h2 className="font-bold text-3xl lg:text-5xl">Welcome!</h2>
                            <p>To Keep Connected With Us Please <br /> Register With Your Personal Info</p>
                            <div className="card-actions justify-center">
                                <button className="border-2 border-white rounded-full w-40 h-10 flex items-center justify-center gap-4">Register <LiaHandPointRightSolid className="text-xl"></LiaHandPointRightSolid></button>
                            </div>
                        </div>
                    </div>
                    <div className="css bg-[#ffff]">
                        <div
                        className="w-full max-w-md p-8 space-y-3 dark:text-gray-800 bg-white">
                        <h1 className="text-3xl font-bold text-center">Create Account</h1>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6 pt-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="username"
                                    placeholder="Name"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("name", { required: true })}/>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <GoPerson className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="image"
                                    id="username"
                                    placeholder="Image URL"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("image", { required: true })} />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CiImageOn className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="email"
                                    id="username"
                                    placeholder="Email"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("email", { required: true })} />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <AiOutlineMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="relative">
                                {/* <label htmlFor="password" className="block dark:text-gray-600">Password</label> */}
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="block pl-10 w-full pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...register("password", { required: true })}/>
                                    <div className="absolute inset-y-0 left-0 pl-3 pb-4 flex items-center pointer-events-none">
                                        <CiLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <span className="absolute top-4 right-1" onClick={() => setShowPassword(!showPassword)}>
                                        {

                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                    {errors.password && <span className="text-red-500">This field is required</span>}
                                <div className="flex justify-end text-xs dark:text-gray-600">
                                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <button
                                className="block w-full p-3 text-center rounded-full dark:text-gray-50 dark:bg-[#38AA95]">Register</button>
                            </form>
                            {
                                registerError && <p className="text-red-500 font-medium">{registerError}</p>
                            }
                            <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don not have an account?
                                <Link to="/login"><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Login</a></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;