import useAuth from "../useAuth/useAuth";
import { toast } from "sonner";
import { getAuth, updateProfile } from "firebase/auth";
import { Helmet } from 'react-helmet';
import { GoPerson } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { LiaHandPointRightSolid } from "react-icons/lia";
// export default UpdateProfile;

const UpdateProfile = () => {
    const { user,setUser } = useAuth()

    const handleUpdate = async(e)=>{
        e.preventDefault()
        const form = e.target
        const userName = form.name.value
        const image = form.image.value

        const toastId = toast.loading("Please wait")
        try{
            const auth = getAuth()
            await updateProfile(auth.currentUser, {
                photoURL: image,displayName:userName
            })
            // to show the updated profile img
            let userReplica = { ...user }
            userReplica.displayName = userName
            userReplica.photoURL = image
            setUser(userReplica)


            toast.dismiss(toastId)
            toast.success("Name and Image updated")
        }
        catch {
            toast.dismiss(toastId)
            toast.error("Something went wrong", {
                description: "Please refresh this page and try again"
            })
        }
    }

    return (
        <div>
        <Helmet>
            <title>Update Profile</title>
        </Helmet>
        
        <section>
                <div className="flex lg:flex-row flex-col justify-center items-center">
                    <div className="css bg-[#38AA95]">
                        <div className="card-body text-white space-y-5 text-center">
                            <h2 className="font-bold text-3xl lg:text-5xl">Update!</h2>
                            <p>To Keep Connected With Us Please <br /> Update With Your Personal Info</p>
                            <div className="card-actions justify-center">
                                <button className="border-2 border-white rounded-full w-40 h-10 flex items-center justify-center gap-4">Update <LiaHandPointRightSolid className="text-xl"></LiaHandPointRightSolid></button>
                            </div>
                        </div>
                    </div>
                    <div className="css bg-[#ffff]">
                        <div
                            className="w-full max-w-md p-8 space-y-3 dark:text-gray-800 bg-white">
                            <div className="mb-8 text-center">
                                <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
                                <p className="text-sm dark:text-gray-600">Update Your Profile</p>
                            </div>
                            <form onSubmit={handleUpdate} className="space-y-12">
                                <div className="space-y-4">
                                    <div className="relative">
                                        <input defaultValue={user?.displayName}
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Update your name"
                                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <GoPerson className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                    </div>
                                    <div className="relative">
                                        <input defaultValue={user?.email}
                                            readOnly
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="leroy@jenkins.com"
                                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <AiOutlineMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                    </div>
                                    <div className="relative">
                                        <input defaultValue={user?.photoURL}
                                            type="text"
                                            name="image"
                                            id="image"
                                            placeholder="Image URL"
                                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <CiImageOn className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full px-8 py-3 font-semibold rounded-full dark:bg-[#38AA95] dark:text-gray-50">Update Profile</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    </div>
    );
};

export default UpdateProfile;