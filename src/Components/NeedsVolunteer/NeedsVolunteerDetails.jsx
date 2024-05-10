import { Link, useLoaderData, useParams } from "react-router-dom";

const NeedsVolunteerDetails = () => {
    const volunteers = useLoaderData();
        const { _id } = useParams();
        const Volunteer = volunteers.find(volunteer => volunteer._id === _id);
        console.log(Volunteer);
    return (
        <div className='mx-2'>
        <section className='flex flex-col lg:flex-row justify-center items-center container mx-auto'>
            <div className="flex justify-center bg-base-200 p-5">
                <img className="w-[500px] h-[600px] object-cover" src={Volunteer.Thumbnail} alt="" />
            </div>
            <div className="bg-card mx-auto w-full max-w-md rounded-lg bg-base-100 shadow-2xl">
                {/* Product Title */}
                <div className="flex flex-col  px-6 pt-6">
                    <h3 className="text-2xl font-semibold ">{Volunteer.Post_Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-white/60">{Volunteer.Deadline}</p>
                </div>
                {/* Category and price */}
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-end justify-between">
                        <h2 className="text-center text-2xl font-medium">{Volunteer.category}</h2>
                        <p className="rounded-lg bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD] p-2 text-center text-sm text-white">Location: {Volunteer.Location}</p>
                    </div>
                </div>
                <Link to="/"><button className="btn w-full text-white bg-[#38AA95]">Back to Home</button></Link>
            </div>
        </section>
    </div>
    );
};

export default NeedsVolunteerDetails;