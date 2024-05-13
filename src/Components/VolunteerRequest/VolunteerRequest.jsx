import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import VolunteerRequestCard from "./VolunteerRequestCard";
import { Helmet } from 'react-helmet';
const VolunteerRequest = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/submit?email=${user?.email}`;
    const [submits, setSubmits] = useState([]);
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSubmits(data))
    },[])
    const handleDelete = (id,PostId) => {
        const proceed = confirm('Are You Sure You Want To Delete');
        if(proceed){
            fetch(`http://localhost:5000/submit/${id}/${PostId}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
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