import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet';
import VolunteerAllCard from "./VolunteerAllCard";
const NeedVolunteerPage = () => {
    const volunteers = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>NeedVolunteerPage</title>
            </Helmet>
            <section className='mt-16 max-w-6xl mx-auto'>
                <h2 className="lg:text-4xl text-2xl text-center font-medium">All Volunteer Need Page</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                    {volunteers?.map(volunteer => <VolunteerAllCard key={volunteer._id} volunteer={volunteer}></VolunteerAllCard>)}
                </div>
            </section>
        </div>
    );
};

export default NeedVolunteerPage;