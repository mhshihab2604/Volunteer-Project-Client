import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import VolunteerRequestCard from "./VolunteerRequestCard";
import { Helmet } from 'react-helmet';
import { toast } from "sonner";
const VolunteerRequest = () => {
    const {user} = useContext(AuthContext);
    const url = `https://assignment-11-server-one-pied.vercel.app/submit?email=${user?.email}`;
    const [submits, setSubmits] = useState([]);
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSubmits(data))
    },[])
    const handleDelete = (id,PostId) => {
        const proceed = toast.message("Cancel Successfully");
        if(proceed){
            fetch(`https://assignment-11-server-one-pied.vercel.app/submit/${id}/${PostId}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Cancel Successfully")
                    const remaining = submits.filter(submit => submit._id !== id);
                    setSubmits(remaining);
                }
            })
        }
    }
    return (
        <div>
            <Helmet>
                <title>Volunteer Request</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <div className="mt-10 mx-2">
                    {submits.map(submit => <VolunteerRequestCard key={submit._id} submit={submit} handleDelete={handleDelete}></VolunteerRequestCard>)}
                </div>
            </div>
        </div>
    );
};

export default VolunteerRequest;