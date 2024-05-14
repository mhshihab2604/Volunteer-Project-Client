import { useEffect, useState } from "react";
import LayoutTableCard from "./LayoutTableCard";

const LayoutTable = () => {
    const [needsVolunteer, setNeedsVolunteer] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-one-pied.vercel.app/needsVolunteer')
            .then(res => res.json())
            .then(data => setNeedsVolunteer(data));
    },[])
    return (
        <div>
            <div className="mx-auto container">
                <div className="mt-5">
                    {
                        needsVolunteer?.map(needsVolunteer => <LayoutTableCard key={needsVolunteer._id} needsVolunteer={needsVolunteer}></LayoutTableCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LayoutTable;