import { useEffect } from "react";
import { useState } from "react";
import NeedsVolunteerCard from "./NeedsVolunteerCard";
import { Link } from "react-router-dom";

const NeedsVolunteer = () => {
    const [needsVolunteer, setNeedsVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/needsVolunteer')
            .then(res => res.json())
            .then(data => setNeedsVolunteer(data));
    },[])
    return (
        <div className="mt-20">
            <div className='text-center space-y-4'>
                <h1 className='lg:text-4xl text-2xl text-center font-medium'>Volunteer Needs Now</h1>
                <p>The majority of volunteer management platforms have undergone alterations, <br /> often impacted by injected humor or randomized words that lack believability</p>
            </div>
            <div className="mx-auto container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
                    {
                        needsVolunteer?.slice(0, 6).map(needsVolunteer => <NeedsVolunteerCard key={needsVolunteer._id} needsVolunteer={needsVolunteer}></NeedsVolunteerCard>)
                    }
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <Link to="/NeedVolunteer"><button className="btn border-2 border-[#38AA95] hover:text-white hover:bg-[#38AA95] w-36">See All</button></Link>
            </div>
        </div>
    );
};

export default NeedsVolunteer;