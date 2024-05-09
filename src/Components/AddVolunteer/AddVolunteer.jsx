import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import useAuth from '../../Components/useAuth/useAuth';
const AddVolunteer = () => {
    const [startDate, setStartDate] = useState(new Date());

    const {user} = useAuth();
    const handleAddVolunteer = e => {
        e.preventDefault();
        const form = e.target;
        const postTitle = form.postTitle.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const organizer_name = form.organizer_name.value;
        const organizer_email = form.organizer_email.value;
        const description = form.description.value;
        const thumbnail = form.thumbnail.value;
        const newVolunteer = {postTitle, location, volunteers_needed, category, deadline, organizer_name, organizer_email, description, thumbnail}
        console.log(newVolunteer);
        // send data to the server
        fetch('http://localhost:5000/userCollection', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Post Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                // fetch('https://assignment-10-server-nine-nu.vercel.app/userCraft', {
                //     method: 'POST',
                //     headers: {
                //         'content-type' : 'application/json'
                //     },
                //     body: JSON.stringify({thumbnail, volunteers_needed, deadline, organizer_name , organizer_email:user?.email})
                // })
                // .then(() => {
                //     Swal.fire({
                //         title: 'Success!',
                //         text: 'Add Post Successfully',
                //         icon: 'success',
                //         confirmButtonText: 'Cool'
                //       })
                // })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Add Volunteer</title>
            </Helmet>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleAddVolunteer} className="container w-full p-8 mx-auto dark:text-black space-y-6 rounded-md shadow-2xl bg-white">
                    <h2 className="w-full text-3xl font-bold text-center">Add Post</h2>
                    <section className="flex flex-col lg:flex-row justify-between pt-10 gap-10">
                        <div className="w-full lg:w-1/2">
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Post Title</label>
                                <input name="postTitle" type="text" placeholder="Enter Post Title" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Location</label>
                                <input name="location" type="text" placeholder="Enter Location" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Volunteers Needed</label>
                                <input name="volunteers_needed" type="text" placeholder="Enter Volunteers Needed" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Category</label>
                                <input type="text" name="category" placeholder="Enter Category" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Organizer Name</label>
                                <input defaultValue={user.displayName} type="text" name="organizer_name" placeholder="Organizer Name" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Organizer Email</label>
                                <input defaultValue={user.email}  type="text" name="organizer_email" placeholder="Organizer Email" required="" className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Description</label>
                                <input type="text" name="description" placeholder="Enter Description" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="block mb-1 ml-1">Deadline</label>
                                <DatePicker name='deadline' className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                    </section>
                    <div className="form-control">
                        <label className="block mb-1 ml-1">Thumbnail</label>
                        <input type="text" name="thumbnail" placeholder="Enter Thumbnail" required className="block w-full border-2 p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#331A15] dark:bg-gray-100" />
                    </div>
                    <div className="bg-[#38AA95] font-semibold border-2">
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 focus:dark:ring-[#331A15] hover:dark:ring-[#331A15] dark:text-gray-50">Add Post</button>
                    </div>
                </form>
            </section>
        </div>
    );
};
export default AddVolunteer;