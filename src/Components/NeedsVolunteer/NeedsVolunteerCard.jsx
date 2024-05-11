import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from "react-router-dom";
const NeedsVolunteerCard = ({needsVolunteer}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 2000);

        // Cleanup function
        return () => clearTimeout(timer);
    }, []);


    const { _id, Thumbnail, PostTitle, Category, Deadline} = needsVolunteer;
    return (
        <div>
            <section>
                <div className="card card-compact lg:w-96 bg-white shadow-2xl mt-10 p-1 border-2 space-y-5">
                    {isLoading ? (
                    <Skeleton height={200} />
                    ) : (
                    <figure><img className="h-[280px] w-full" src={Thumbnail} alt="Job" /></figure>
                    )}
                    <div className="card-body space-y-2">

                    <div className="flex lg:flex-row  gap-2 lg:gap-0 flex-col text-center  justify-between  font-medium">
                        {isLoading ? (
                            <Skeleton width={70} borderRadius={100} height={40}/>
                        ) : (
                            <h1 className="rounded-full bg-gradient-to-r from-[#38aa95] to-[#6da59a] text-white p-2 font-medium">Category: <small className="font-semibold">{Category}</small></h1>
                        )}
                        {isLoading ? (
                            <Skeleton width={70} borderRadius={100} height={40}/>
                        ) : (
                            <h1 className="rounded-full bg-gradient-to-r from-[#38aa95] to-[#6da59a] text-white p-2 font-medium">Deadline: <small className="font-semibold">{Deadline}</small></h1>
                        )}
                    </div>
                    {isLoading ? (
                        <Skeleton width={100} />
                    ) : (
                        <h2 className="card-title text-sm">{PostTitle}</h2>
                    )}
                    {isLoading ? (
                        <Skeleton width="full" height={50} />
                    ) : (
                    <Link to={`/needsVolunteerDetails/${_id}`}>
                        <button className="btn bg-[#38AA95] text-white w-full">Details</button>
                    </Link>  
                    )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NeedsVolunteerCard;