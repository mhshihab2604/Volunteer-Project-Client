function App() {


  return (
    <>
        {/* SignIn */}
        
      {/* <section className="flex flex-col lg:flex-row justify-around items-center  container mx-auto">
                <div>
                    <div className="card-body text-white space-y-5 text-center bg-[#38AA95]">
                        <h2 className="font-bold text-3xl lg:text-5xl">Welcome!</h2>
                        <p>To Keep Connected With Us Please <br /> Register With Your Personal Info</p>
                        <div className="card-actions justify-center">
                            <button className="border-2 border-white rounded-full w-40 h-10 flex items-center justify-center gap-4">Register <LiaHandPointRightSolid className="text-xl"></LiaHandPointRightSolid></button>
                        </div>
                    </div>
                </div>
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
        </section> */}
      

        {/* Login */}

       {/* <section className="flex flex-col lg:flex-row justify-around items-center container mx-auto">
        <div>
            <div className="card-body text-black space-y-5 text-center">
                <h2 className="font-bold text-3xl lg:text-5xl">Welcome Back!</h2>
                <p>To Keep Connected With Us Please <br /> Login With Your Personal Info</p>
                <div className="card-actions justify-center">
                    <button className="bg-[#38AA95] rounded-full w-40 h-10 flex items-center justify-center gap-4  text-white">Login <LiaHandPointRightSolid className="text-xl text-white"></LiaHandPointRightSolid></button>
                </div>
            </div>
        </div>
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
      </section> */}


      {/* Update */}
      
        {/* 
        <div
            className="flex flex-col mx-auto max-w-md p-6 sm:p-10 pt-10 dark:text-gray-800 bg-white">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
                <p className="text-sm dark:text-gray-600">Update Your Profile</p>
            </div>
            <form onSubmit={handleUpdate} className="space-y-12">
                <div className="space-y-4">
                    <div className="relative">
                        <input defaultValue={user?.displayName}
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Update your name"
                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <GoPerson className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                    </div>
                    <div className="relative">
                        <input defaultValue={user?.email}
                            readOnly
                            type="email"
                            name="email"
                            id="email"
                            placeholder="leroy@jenkins.com"
                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <AiOutlineMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                    </div>
                    <div className="relative">
                        <input defaultValue={user?.photoURL}
                            type="text"
                            name="image"
                            id="image"
                            placeholder="Image URL"
                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CiImageOn className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 font-semibold rounded-full dark:bg-[#38AA95] dark:text-gray-50">Update Profile</button>
                    </div>
                </div>
            </form>
        </div> */}
    </>
  )
}

export default App
