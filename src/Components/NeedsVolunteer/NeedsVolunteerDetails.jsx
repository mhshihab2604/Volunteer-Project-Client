import { Link, useLoaderData, useParams } from "react-router-dom";

const NeedsVolunteerDetails = () => {
    const volunteers = useLoaderData();
        const { _id } = useParams();
        const Volunteer = volunteers.find(volunteer => volunteer._id === _id);
        console.log(Volunteer);
    return (
        <div className='mx-2'>
        <section className=' container mx-auto'>
            <div>
                <img className="w-full h-auto object-cover" src={Volunteer.Thumbnail} alt="" />
            </div>
            <div className="card mx-auto w-full rounded-lg bg-base-100 shadow-2xl pt-5">
                {/* Product Title */}
                <div className="lg:w-1/2 mx-auto space-y-4">
                    <h3 className="text-2xl text-center  font-semibold ">{Volunteer.PostTitle}</h3>
                    <p className="text-center text-sm text-black">{Volunteer.Description}</p>
                </div>
                {/* Category and price */}
                <div className="flex flex-col gap-4 p-6">
                    <div>
                        <h2 className="text-center text-2xl font-medium">Category: {Volunteer.Category}</h2>
                    </div>
                </div>
                <Link to="/"><button className="btn w-full text-white bg-[#38AA95]">Be A Volunteer</button></Link>
            </div>
        </section>
    </div>
    );
};

export default NeedsVolunteerDetails;