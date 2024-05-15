import { useEffect } from "react";
import { useState } from "react";
import NeedsVolunteerCard from "./NeedsVolunteerCard";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const NeedsVolunteer = () => {
    const [sorting, setSorting] = useState("0")
    const [needsVolunteer, setNeedsVolunteer] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-one-pied.vercel.app/needsVolunteer?sort=${sorting}`)
            .then(res => res.json())
            .then(data => setNeedsVolunteer(data));
    },[sorting])
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div>
            <div className="mt-20">
                <div className='text-center space-y-4'>
                    <h1 className='lg:text-4xl text-2xl text-center font-medium'>Volunteer  
                    <span className="ml-2" style={{ color: '#38AA95', fontWeight: 'medium' }}>
                    <Typewriter
                    words={['Needs', 'Now']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={1200}
                    onLoopDone={handleDone}
                    />
                    </span></h1>
                    <p>The majority of volunteer management platforms have undergone alterations, <br /> often impacted by injected humor or randomized words that lack believability</p>
                </div>
                <div className="max-w-6xl flex justify-center gap-2 items-center mx-auto mt-10">
                    <h1 className="text-2xl font-bold">Filter :</h1>
                    <select className="p-2 border-2 w-36 hover:bg-[#38AA95] text-black hover:text-white font-semibold border-indigo-300 rounded" value={sorting} onChange={(e) => setSorting(e.target.value)}>
                        <option value="0">All</option>
                        <option value="1">New First</option>
                        <option value="-1">OldFirst</option>
                    </select>
                </div>
                <div className="mx-auto container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
                        {
                            needsVolunteer?.slice(0, 6).map(needsVolunteer => <NeedsVolunteerCard key={needsVolunteer._id} needsVolunteer={needsVolunteer}></NeedsVolunteerCard>)
                        }
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <Link to="/NeedVolunteer"><button className="btn border-2 border-[#38AA95] hover:text-white hover:bg-[#38AA95] w-36">See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NeedsVolunteer;