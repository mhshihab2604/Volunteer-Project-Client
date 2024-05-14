import { Helmet } from "react-helmet";
import MyPostCard from "./MyPostCard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const MyPost = () => {
    const [volunteers, setVolunteers] = useState();
    const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://assignment-11-server-one-pied.vercel.app/myPost/${user.email}`)
            .then(res => res.json())
            .then(data => setVolunteers(data));
    },[])
    return (
        <div>
            <Helmet>
                <title>My Post</title>
            </Helmet>
            <section className='mt-16 mx-6'>
                <h2 className="lg:text-4xl text-2xl text-center font-medium">My Post</h2>
                <div className="mt-10">
                    {volunteers?.map(volunteer => <MyPostCard key={volunteer._id} volunteer={volunteer} ></MyPostCard>)}
                </div>
            </section>
        </div>
    );
};

export default MyPost;
