import { IoIosCall } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className="p-10 bg-[#1A1D1F] text-white">
                <div className="footer items-center max-w-7xl mx-auto">
                    <aside className="space-y-4">
                        <p className="text-[#38AA95]">Contact us</p>
                        <h1 className="text-2xl">Volunify</h1>
                        <div>
                            <h1 className="flex items-center gap-2"><IoIosCall className="text-[#38AA95]"></IoIosCall>Call us 1-800-555-1234</h1>
                            <h1 className="flex items-center gap-2"><BiSolidMessage className="text-[#38AA95]"></BiSolidMessage>info@example.com</h1>
                            <h1 className="flex items-center gap-2"><GoClockFill className="text-[#38AA95]"></GoClockFill>Open House on the 24th, - 12 mid day to 5 pm.</h1>
                        </div>
                        <button className="bg-[#38AA95] p-4 text-white font-semibold">Schedule A Visit</button>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a href="/" className="link link-hover hover:text-[#38AA95]">Home</a>
                        <a href="/NeedVolunteer" className="link link-hover hover:text-[#38AA95]">Need Volunteer</a>
                        <a href="/volunteerRequest" className="link link-hover hover:text-[#38AA95]">Volunteer Request</a>
                        <a href="/userProfile" className="link link-hover hover:text-[#38AA95]">User Profile</a>
                        <a href="/updateProfile" className="link link-hover hover:text-[#38AA95]">Update Profile</a>
                        <a href="/register" className="link link-hover hover:text-[#38AA95]">Register</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title"> APPS</h6>
                        <a className="link link-hover hover:text-[#38AA95]">Mac</a>
                        <a className="link link-hover hover:text-[#38AA95]">Windows</a>
                        <a className="link link-hover hover:text-[#38AA95]">iPhone</a>
                        <a className="link link-hover hover:text-[#38AA95]">Android</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">VOLUNTEER MANAGEMENT</h6>
                        <a className="link link-hover hover:text-[#38AA95]">Volunteer Recruitment</a>
                        <a className="link link-hover hover:text-[#38AA95]">Volunteer Training</a>
                        <a className="link link-hover hover:text-[#38AA95]">Volunteer Opportunities</a>
                        <a className="link link-hover hover:text-[#38AA95]">Volunteer Feedback</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover hover:text-[#38AA95]">Terms of use</a>
                        <a className="link link-hover hover:text-[#38AA95]">Privacy policy</a>
                        <a className="link link-hover hover:text-[#38AA95]">Cookie policy</a>
                    </nav>
                </div>
                <nav className="pt-5">
                    <div className="grid grid-flow-col gap-4 justify-center">
                        <a href="https://www.instagram.com/mhshihab2604/"><FaInstagram className="text-2xl hover:text-[#38AA95]"></FaInstagram></a>
                        <a href="https://github.com/mhshihab2604"><FaGithub className="text-2xl hover:text-[#38AA95]"></FaGithub></a>
                        <a href="https://www.facebook.com/mhshihab2604"><FaFacebook className="text-2xl hover:text-[#38AA95]"></FaFacebook></a>
                    </div>
                </nav> 
                <aside className="pt-5">
                    <p className="text-center">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;