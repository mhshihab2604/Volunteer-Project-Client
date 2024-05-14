import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    const [refetchUser,setRefetchUser] = useState(false)
    const [user,setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading);
    // create user
    const createUser = (email, password) => {
            setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const UpdateUserProfile =(name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
          
    }

    // sign in user
    const signInUser = ( email, password) => {
            setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
            setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // // github login
    const githubLogin = () =>{
            setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    // logout
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
           setUser(user)
           console.log('current user', user);
           setLoading(false)
            // if user exists then issue a token
            if (user) {
                const loggedUser = { email: user.email }
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }

        });
        return () => unsubscribe();
    },[refetchUser])

    const allValues = {
        setUser,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        loading,
        UpdateUserProfile,
        refetchUser,
        setRefetchUser
    }
    return (
       <AuthContext.Provider value={allValues}>
            {children}
       </AuthContext.Provider>
    );
};

export default FirebaseProvider;