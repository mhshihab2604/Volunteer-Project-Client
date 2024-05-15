import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet';
import NeedsVolunteer from "../NeedsVolunteer/NeedsVolunteer";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import OurTeam from "../OurTeam/OurTeam";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <NeedsVolunteer></NeedsVolunteer>
            <h1 className="lg:text-4xl text-2xl text-center font-medium mt-28">Volunteer
            
                <span className="ml-2" style={{ color: '#38AA95', fontWeight: 'medium' }}>
                <Typewriter
                words={['Communication']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1200}
                onLoopDone={handleDone}
                />
                </span>
            </h1>
            <p  className="text-center font-medium mt-5">Don not let your communications with volunteers get lost in the shuffle With VolunteerHub <br /> volunteer management software, you can relay the right message at the right time. <br /> Utilize our volunteer communication features, including automated emails, text messages, <br /> and social media integration, to ensure your important communications reach your volunteers</p>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto mt-10">
                <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg  bg-[#E5F5F2] p-6 shadow-lg md:w-[350px]  text-black">
                    <MdOutlineMarkEmailRead className="text-5xl" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Email Messaging</h1>
                        <p className="text-sm text-gray-500 dark:text-black/60">Create one-off or automated email messages, sent at intervals you designate. Keep volunteers informed and engaged without the manual effort.</p>
                    </div>
                </div>
                <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg  bg-[#E5F5F2] p-6 shadow-lg md:w-[350px]  text-black">
                    <MdOutlineMessage className="text-5xl" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Text Messaging</h1>
                        <p className="text-sm text-gray-500 dark:text-black/60">Quickly text individuals, groups, or all volunteers. Bypass email inboxes and communicate important updates in real time.</p>
                    </div>
                </div>
                <div className="hover:scale-110 scale-100 transition-all duration-100 mx-auto max-w-[350px] space-y-4 rounded-lg  bg-[#E5F5F2] p-6 shadow-lg md:w-[350px]  text-black">
                    <IoShareSocialOutline className="text-5xl" />
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">Social Media Integration</h1>
                        <p className="text-sm text-gray-500 dark:text-black/60">Boost your organizations visibility with our social media feature. Easily share your social media channels and allow volunteers to post updates as part of your volunteer scheduling process..</p>
                    </div>
                </div>
            </section>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;