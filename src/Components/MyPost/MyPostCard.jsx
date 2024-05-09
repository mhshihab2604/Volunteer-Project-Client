const MyPostCard = ({volunteer}) => {
    const {postTitle, location, category, organizer_name,} = volunteer;
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
                        <tr className="bg-white text-black">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {postTitle}
                            </th>
                            <td className="px-6 py-4">
                                {organizer_name}
                            </td>
                            <td className="px-6 py-4">
                                {category}
                            </td>
                            <td className="px-6 py-4">
                                {location}
                            </td>
                            <td scope="col" className="px-6 py-3">
                                <button className="btn bg-[#38AA95] text-white">Update</button>
                            </td>
                            <td scope="col" className="px-6 py-3">
                                <button className="btn bg-[#38AA95] text-white">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPostCard;