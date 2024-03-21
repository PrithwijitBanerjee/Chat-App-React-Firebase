import { off, onValue, ref } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";
import { transformToArrWithId } from "../utlis/helper";

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState(null);
    useEffect(() => {
        let roomDBRef;
        let valueCallBack;
        roomDBRef = ref(database, 'rooms');
        valueCallBack = onValue(roomDBRef, (snapshot) => {
            if (!!snapshot.val()) {
                setRooms(transformToArrWithId(snapshot.val()));
            }
        });

        return () => { // clean up function for unsubscribing the subscription of listener ...

            if (roomDBRef && valueCallBack) // Check if both references exist before calling off
            {
                off(roomDBRef, valueCallBack); // Unsubscribe the listener callback
            }
        }
    }, []);
    return (<>
        <RoomContext.Provider value={rooms}>
            {children}
        </RoomContext.Provider>
    </>)
}

export default RoomProvider;

// Custom Hooks ...

export const useRooms = () => useContext(RoomContext);