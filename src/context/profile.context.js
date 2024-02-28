import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/firebase";
import { onValue, ref } from "firebase/database";

const ProfileContext = createContext(null);  // creating the context....


export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let userRef;
        const authUnSub = onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in
                const uid = user.uid;
                // onValue listener called that callback function on the userRef database 
                // If any changes occurs in database like userRef...
                userRef = ref(database, `profiles/${uid}`);
                onValue(userRef, (snapshot) => {
                    if (!!snapshot.val()) {
                        const { createdAt, name } = snapshot.val();
                        const userData = {
                            createdAt,
                            name,
                            email: user.email,
                            uid
                        }
                        setProfile(userData);
                        setIsLoading(false);
                    }
                });
            } else {
                // User is signed out
                // if (userRef) {
                //     userRef.off();
                // }
                setProfile(null);
                setIsLoading(false);
            }
        });

        // cleanUp function
        return () => {
            authUnSub();
            // if (userRef) {
            //     userRef.off();  // unsubscribe or disconnect the callback with the database reference
            // }
        }
    }, []);
    //providing the chidren with context value ....
    return <ProfileContext.Provider value={{ profile, isLoading }}>
        {children}
    </ProfileContext.Provider>
}


// custom hooks ....
export const useProfileContext = () => useContext(ProfileContext);