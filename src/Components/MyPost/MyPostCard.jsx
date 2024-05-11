import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostCard = ({volunteer,volunteers,setVolunteers }) => {
    const {_id,postTitle, location, category, organizer_name,} = volunteer || {};
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
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase bg-[#38AA95] text-white font-semibold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Post Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Organizer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Update
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white text-black ">
                            <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                <p>{postTitle}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>{organizer_name}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>{category}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p>{location}</p>
                            </td>
                            <td scope="col" className="px-6 py-3">
                                <Link to={`/updateVolunteer/${_id}`}><button className="btn bg-[#38AA95] text-white">Update</button></Link>
                            </td>
                            <td scope="col" className="px-6 py-3">
                                <button onClick={() => handleDelete(_id)} className="btn bg-[#38AA95] text-white">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostCard;