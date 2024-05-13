import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { toast } from "sonner";


const BeVolunteerPage = () => {
    const {id} = useParams()
    const volunteer = useLoaderData()
    const {PostTitle, Deadline, Location, Category, OrganizerName, OrganizerEmail, VolunteersNeeded, Description, Thumbnail} = volunteer || {};
    const {user} = useContext(AuthContext);
    console.log("jjjj", id);
    const [volunteerAvailable, setVolunteerAvailable] = useState(VolunteersNeeded)
    const handleSubmitService = e => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;        
        const PostTitle = form.PostTitle.value;        
        const Deadline = form.Deadline.value;        
        const Location = form.Location.value;        
        const Category = form.Category.value;        
        const OrganizerName = form.OrganizerName.value;        
        const OrganizerEmail = form.OrganizerEmail.value;        
        const Suggestion = form.Suggestion.value;        
        // const VolunteersNeeded = form.VolunteersNeeded.value;        
        const Status = form.Status.value;        
        const Description = form.Description.value;        
        const Thumbnail = form.Thumbnail.value;        
       if(!VolunteersNeeded > 0){
        return toast.error('Volunteer Limit Reached')
       }
        const submit = {
            PostId:id,
            name,
            email,
            PostTitle,
            Deadline,
            Location,
            Category,
            OrganizerName,
            OrganizerEmail,
            Suggestion,
            VolunteersNeeded,
            Status,
            Description,
            Thumbnail
        }
        console.log(submit);  
        
        fetch(`http://localhost:5000/submit/${id}?volunteer=${volunteerAvailable}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submit)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Submit Volunteer Successfully')
                const availableVolNum = parseInt(volunteerAvailable)
                setVolunteerAvailable(availableVolNum-1)
            }
        })
    }
    return (
        <div>
            <section className="p-6 dark:text-gray-800 bg-[#F3F3F3] rounded-md shadow mt-32 w-full">
            <h2 className="w-full text:xl lg:text-3xl font-bold leading-tight text-center">Be a Volunteer: {PostTitle}</h2>
                <form onSubmit={handleSubmitService} className="container w-full  p-8 mx-auto space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 ml-1">Volunteer name</label>
                            <input id="VolunteerName" name="VolunteerName" defaultValue={user?.displayName} type="text" placeholder="Volunteer name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-1 ml-1">Deadline</label>
                            <input id="Deadline" name="Deadline" defaultValue={Deadline} type="date" placeholder="Deadline" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 ml-1">Volunteer Email</label>
                            <input id="VolunteerEmail" name="VolunteerEmail" defaultValue={user?.email} type="email" placeholder="Volunteer Email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block mb-1 ml-1">Location</label>
                            <input id="Location" name="Location" defaultValue={Location}  type="Location" placeholder="Location" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="PostTitle" className="block mb-1 ml-1">Post Title</label>
                            <input id="PostTitle" name="PostTitle" defaultValue={PostTitle} type="text" placeholder="Post Title" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-1 ml-1">Category</label>
                            <input id="Category" name="Category" defaultValue={Category} type="text" placeholder="Category" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="organizerName" className="block mb-1 ml-1">Organizer Name</label>
                            <input id="OrganizerName" name="OrganizerName" defaultValue={OrganizerName}  type="text" placeholder="Organizer Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="organizerEmail" className="block mb-1 ml-1">OrganizerEmail</label>
                            <input id="OrganizerEmail" name="OrganizerEmail" defaultValue={OrganizerEmail} type="text" placeholder="OrganizerEmail" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="volunteersNeeded" className="block mb-1 ml-1">Volunteers Needed</label>
                            <input id="VolunteersNeeded" name="VolunteersNeeded" value={volunteerAvailable} type="text" placeholder="Volunteers Needed" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="status" className="block mb-1 ml-1">Status</label>
                            <input id="Status" name="Status" defaultValue={'Requested'}  type="text" placeholder="Status" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="suggestion" className="block mb-1 ml-1">Suggestion</label>
                            <textarea id="Suggestion" name="Suggestion" type="text" placeholder="Suggestion..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100"></textarea>
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-1 ml-1">Description</label>
                            <textarea id="Description" name="Description" defaultValue={Description} type="text" placeholder="Description..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100"></textarea>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="thumbnail" className="block mb-1 ml-1">Thumbnail</label>
                        <input id="Thumbnail" name="Thumbnail" defaultValue={Thumbnail}  type="text" placeholder="Thumbnail" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-[#FF3811] dark:bg-gray-100" />
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-[#38AA95] focus:dark:ring-[#38AA95] hover:dark:ring-[#38AA95] dark:text-gray-50">Requested</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default BeVolunteerPage;