import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { useState } from "react";
import myImage from "../../assets/logo22.png"
const Header = () => {
  const { logout, user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false)
  console.log(user);
  const handleSignOut = () => {
    setShowDropdown(false)
    logout().then().catch();
  };
  return (
    <div>
      <div className="navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-black lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black  gap-5 shadow bg-base-100 rounded-box w-52"
            >
                <Link to="/" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Home</a>
                </Link>
                <Link to="/register" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Register</a>
                </Link>
                <Link to="/login" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Login</a>
                </Link>
                <Link to="/updateProfile" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Update Profile</a>
                </Link>
            </ul>
          </div>
          <div className="flex justify-center -space-x-6 items-center">
            <img className="w-24" src={myImage} alt="" />
            <div className="bg-gradient-to-r from-[#03cdb5] to-[#C8143A] text-transparent bg-clip-text">
                <a className=" text-sm lg:text-xl font-extrabold">Volunify</a>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black gap-5">
            <Link to="/" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Home</a>
            </Link>
            <Link to="/register" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Register</a>
            </Link>
            <Link to="/login" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Login</a>
            </Link>
            <Link to="/updateProfile" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Update Profile</a>
            </Link>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end relative space-x-2">
            <div className="lg:tooltip lg:tooltip-left" data-tip={`${user.displayName}`}>
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
                onClick={() => setShowDropdown(!showDropdown)}
              />
            </div>
            <div className={showDropdown ? "userDropDown showDropdown space-y-2" : "userDropDown"} >
                <h1 className="text-xl font-medium">Name:{user.displayName}</h1>
                <h1 className="font-medium">{user.email}</h1>
                <Link to="/userProfile">
                  <button className="btn bg-[#38AA95] text-white border-none">User Profile</button>
                </Link>
            </div>
            <button
                onClick={handleSignOut}
                className="p-1 rounded  bg-[#38AA95] text-white border-none">Logout</button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button
                onClick={logout}
                className="btn bg-[#38AA95] text-white border-none"
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

