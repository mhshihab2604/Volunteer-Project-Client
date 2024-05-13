import { Link } from "react-router-dom";

const LayoutTableCard = ({needsVolunteer}) => {
    const {_id, Thumbnail, PostTitle, Category, Deadline} = needsVolunteer || {};
    return (
        <div className="overflow-x-auto ">
            <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[#38AA95] text-white">
                            <th className="py-3 px-6 text-left border-b">Thumbnail</th>
                            <th className="py-3 px-6 text-left border-b">PostTitle</th>
                            <th className="py-3 px-6 text-left border-b">Deadline</th>
                            <th className="py-3 px-6  border-b text-left">Category</th>
                            <th className="py-3 px-6  border-b text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b">
                                <img
                                    src={Thumbnail}
                                    alt="table navigate ui"
                                    className="h-24 w-24 rounded-lg object-cover bg-gray-300"/>
                            </td>
                            <td className="py-4 px-6 border-b">{PostTitle}</td>
                            <td className="py-4 px-6 border-b">{Deadline}</td>
                            <td className="py-4 px-6 border-b">{Category}</td>
                            <td className="py-4 px-6 border-b">
                                <Link to={`/needsVolunteerDetails/${_id}`}><button className="btn bg-[#38AA95] text-white">Details</button></Link>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    );
};

export default LayoutTableCard;