import MyPostCard from "./MyPostCard";
import { useEffect, useState } from "react";

const MyPost = () => {
    const [volunteers, setVolunteers] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/userCollection')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    },[])
    return (
        <div>
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
