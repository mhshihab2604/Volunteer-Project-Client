import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const VolunteerAllCard = ({volunteer}) => {
    const {postTitle, location, category, deadline, organizer_name, organizer_email, description, thumbnail} = volunteer;   

    return (
        <div>
            <div className="card w-full h-full card-compact bg-base-100 shadow-xl border-2 rounded-lg p-4 space-y-3">
                <div>
                    <figure><img className="rounded-t-xl h-52 w-full" src={thumbnail} alt="Shoes"/></figure>
                </div>
                <div className="flex justify-around">
                        <h1 className="rounded-full bg-[#e7e7e7] p-2 font-semibold">{category}</h1>
                        <h1 className="rounded-full bg-[#e7e7e7] p-2 font-semibold">{deadline}</h1>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{postTitle}</h2>
                    <h2 className="text-[#38aa95] flex items-center gap-1"><IoLocationSharp className="text-[#38aa95]"></IoLocationSharp>{location}</h2>
                    <p className="text-[#131313CC] font-medium">{description}</p>
                </div>
                <hr className="border-dashed" />
                <div className="bg-[#F3F3F3] p-2 text-black font-semibold text-center">
                    <p>Organizer Name: {organizer_name}</p>
                    <p>Organizer Email: {organizer_email}</p>
                </div>
                <Link>
                    <button className="btn w-full text-white bg-[#38aa95]">View Properties</button>
                </Link>
                
            </div>
        </div>
    );
};

export default VolunteerAllCard;