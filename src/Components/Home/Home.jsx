import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet';
import NeedsVolunteer from "../NeedsVolunteer/NeedsVolunteer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="">
                <Banner></Banner>
            </div>
            <NeedsVolunteer></NeedsVolunteer>
        </div>
    );
};

export default Home;