import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import UserProfile from './Components/UserProfile/UserProfile';
import { Toaster } from 'sonner';
import AddVolunteer from './Components/AddVolunteer/AddVolunteer';
import MyPost from './Components/MyPost/MyPost';
import VolunteerRequest from './Components/VolunteerRequest/VolunteerRequest';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NeedsVolunteerDetails from './Components/NeedsVolunteer/NeedsVolunteerDetails';
import NeedVolunteerPage from './Components/ NeedVolunteerPage/ NeedVolunteerPage';
import UpdateVolunteer from './Components/UpdateVolunteer/UpdateVolunteer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/addVolunteer",
        element: <AddVolunteer></AddVolunteer>
      },
      {
        path: "/updateVolunteer/:id",
        element: <PrivateRoute>
          <UpdateVolunteer></UpdateVolunteer>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/userCollection/${params.id}`)
      },
      {
        path: "/NeedVolunteer",
        element: <PrivateRoute>
          <NeedVolunteerPage></NeedVolunteerPage>
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/userCollection')
      },
      {
        path: "/myPost",
        element: <PrivateRoute>
          <MyPost></MyPost>
        </PrivateRoute>,
      },
      {
        path: "/volunteerRequest",
        element: <VolunteerRequest></VolunteerRequest>
      },
      {
        path: "/needsVolunteerDetails/:_id",
        element: <PrivateRoute>
          <NeedsVolunteerDetails></NeedsVolunteerDetails>
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/needsVolunteer')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <Toaster position='top-center'></Toaster>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
