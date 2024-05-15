import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { useEffect, useState } from "react";
import myImage from "../../assets/logo22.png"
const Header = () => {
  const { logout, user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false)
  console.log(user);
  const handleSignOut = () => {
    setShowDropdown(false)
    logout().then().catch();
  };

  const [theme, setTheme] = useState('light')
  const handleToggle = e => {
    if (e.target.checked) {
        setTheme('synthwave')
    } else {
        setTheme('light')
    }
}
useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document
        .querySelector('html')
        .setAttribute('data-theme', localTheme)
}, [theme])
  return (
    <div>
      <div className="navbar pt-0 pb-0">
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
                <Link to="/NeedVolunteer" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Need Volunteer</a>
                </Link>
                <Link to="/volunteerRequest" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Volunteer Request</a>
                </Link>
                <Link to="/userProfile" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">User Profile</a>
                </Link>
                <Link to="/register" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Register</a>
                </Link>
                <Link to="/updateProfile" className="flex">
                    <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Update Profile</a>
                </Link>
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center -space-x-6 items-center">
              <img className="w-24" src={myImage} alt="" />
              <div className="bg-gradient-to-r from-[#03cdb5] to-[#C8143A] text-transparent bg-clip-text">
                  <a className=" text-sm lg:text-xl font-extrabold">Volunify</a>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black gap-5">
            <Link to="/" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Home</a>
            </Link>
            <Link to="/NeedVolunteer" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Need Volunteer</a>
            </Link>
            <Link to="/volunteerRequest" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Volunteer Request</a>
            </Link>
            <Link to="/userProfile" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">User Profile</a>
            </Link>
            <Link to="/register" className="flex">
                <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#38AA95] dark:border-[#38AA95]">Register</a>
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
                className="w-10 h-10 rounded-full border-2"
                src={user.photoURL}
                alt=""
                onClick={() => setShowDropdown(!showDropdown)}
              />
            </div>
            <div className={showDropdown ? "userDropDown showDropdown space-y-2" : "userDropDown"} >
                <Link to="/addVolunteer">
                  <a className="btn text-black border-none">Add Volunteer Post</a>
                </Link>
                <Link to="/myPost">
                  <a className="btn text-black border-none">Manage My Post</a>
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
        <label className="cursor-pointer grid place-items-center ml-2">
          <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
          <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
      </label>
      </div>
    </div>
  );
};

export default Header;