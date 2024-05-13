const VolunteerRequestCard = ({submit,handleDelete}) => {
    const {
        _id,
        PostTitle,
        Deadline,
        Category,
        Status,
        Thumbnail} = submit || {};
    return (
        <div>
             <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <tbody>
                        <tr className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="p-5">
                                <button onClick={() => handleDelete(_id)} className="bg-[#38AA95] hover:scale-110 scale-100 transition-all duration-100  py-2 px-4 rounded-md text-white">cancel</button>
                            </td>
                            <td className="py-4 px-4 flex justify-start">
                                <img
                                    src={Thumbnail}
                                    alt="table navigate ui"
                                    className="h-24 w-24 rounded-lg object-cover bg-gray-300"/>
                            </td>
                            <td className="py-4 px-6 border-b  font-medium">
                                <h1>{PostTitle}</h1>
                            </td>
                            <td className="py-4 px-6 border-b text-sm font-medium">{Deadline}</td>
                            <td className="py-4 px-6 border-b text-sm font-medium">{Category}</td>
                            <td className="py-4 px-6 border-b text-end">
                                {
                                    Status === 'confirm' ? <span className="font-bold text-primary">Confirm</span>:
                                    <button
                                    className="bg-[#38AA95] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Please Confirm</button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerRequestCard;