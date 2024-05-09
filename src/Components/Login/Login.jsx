import { useForm } from "react-hook-form";
import useAuth from "../useAuth/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Helmet } from 'react-helmet';

import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { LiaHandPointRightSolid } from "react-icons/lia";

import "./Login.css"
const Login = () => {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password).then((result) => {
      if (result.user) {
        toast.success("You have successfully logged in");
        navigate(from);
      }
    })
    .catch(()=>{
      toast.error('Email or Password invalid')
  })
  };
  return (
    <div >
      <Helmet>
          <title>Login</title>
      </Helmet>
     
      <section>
          <div className="flex lg:flex-row flex-col justify-center items-center">
                <div className="css bg-[#38AA95]">
                  <div className="card-body text-white space-y-5 text-center">
                      <h2 className="font-bold text-3xl lg:text-5xl">Welcome Back!</h2>
                      <p>To Keep Connected With Us Please <br /> Login With Your Personal Info</p>
                      <div className="card-actions justify-center">
                          <button className="bg-[#38AA95] border-2 rounded-full w-40 h-10 flex items-center justify-center gap-4  text-white">Login <LiaHandPointRightSolid className="text-xl text-white"></LiaHandPointRightSolid></button>
                      </div>
                  </div>
                </div>
                <div className="css bg-[#ffff]">
                  <div className="w-full max-w-md p-8 space-y-3 dark:text-gray-800 bg-white">
                      <h1 className="text-3xl font-bold text-center">Login Now</h1>
                      <SocialLogin></SocialLogin>
                      <div className="flex items-center w-full my-4">
                          <hr  className="w-full dark:text-gray-600" />
                          <p className="px-3 dark:text-gray-600">OR</p>
                          <hr  className="w-full dark:text-gray-600" />
                      </div>
                      <form
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate=""
                      action=""
                      className="space-y-6 pt-5"
                      >
                      <div className="relative">
                          <input
                          type="text"
                          name="email"
                          id="username"
                          placeholder="Email"
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          {...register("email", { required: true })}
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <AiOutlineMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          {errors.email && (
                          <span className="text-red-500">This field is required</span>
                          )}
                      </div>
                      <div className="relative">
                          <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          {...register("password", { required: true })}
                          />
                          <div className="absolute inset-y-0 left-0 pl-3 pb-4 flex items-center pointer-events-none">
                              <CiLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          {errors.password && (
                          <span className="text-red-500">This field is required</span>
                          )}
                          <div className="flex justify-end text-xs dark:text-gray-600">
                          <a rel="noopener noreferrer" href="#">
                              Forgot Password?
                          </a>
                          </div>
                      </div>
                      <button className="block w-full p-3 text-center rounded-full dark:text-gray-50 dark:bg-[#38AA95]">
                          Login
                      </button>
                      </form>
                      <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don not have an account?
                          <Link to="/register"> <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Register</a></Link>
                      </p>
                  </div>
                </div>
          </div>
      </section>
    </div>
  );
};

export default Login;
