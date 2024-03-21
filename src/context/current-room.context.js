import { createContext, useContextSelector } from 'use-context-selector';


const currentRoomContext = createContext();

export const CurrentRoomContextProvider = ({ children, data }) => {
    return (<>
        <currentRoomContext.Provider value={data}>
            {children}
        </currentRoomContext.Provider>
    </>)
};

//custom hooks ...
export const useCurrentRoom = (selector) => useContextSelector(currentRoomContext, selector);