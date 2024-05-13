import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostCard = ({volunteer,volunteers,setVolunteers }) => {
    const {_id,PostTitle, Location, Category,  OrganizerName} = volunteer || {};
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/userCollection/${_id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Post has been deleted.",
                            icon: "success"
                        });
                        const remaining = volunteers.filter(volun => volun._id !== _id);
                        setVolunteers(remaining)
                    }
                })
            }
        })};
    return (
        <div>
            <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[#38AA95] text-white">
                            <th className="py-3 px-6 text-left border-b">Post Title</th>
                            <th className="py-3 px-6 text-left border-b">Organizer Name</th>
                            <th className="py-3 px-6 text-left border-b">Category</th>
                            <th className="py-3 px-6  border-b text-end">Location</th>
                            <th className="py-3 px-6  border-b text-end">Update</th>
                            <th className="py-3 px-6  border-b text-end">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b">{PostTitle}</td>
                            <td className="py-4 px-6 border-b">{OrganizerName}</td>
                            <td className="py-4 px-6 border-b">{Category}</td>
                            <td className="py-4 px-6 border-b">{Location}</td>
                            <td className="py-4 px-6 border-b">
                                <Link to={`/updateVolunteer/${_id}`}><button className="btn bg-[#38AA95] text-white">Update</button></Link>  
                            </td>
                            <td className="py-4 px-6 border-b text-end">
                                <button onClick={() => handleDelete(_id)} className="btn bg-[#38AA95] text-white">Delete</button> 
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    );
};

export default MyPostCard;