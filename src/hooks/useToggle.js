import { useState } from 'react'

export const useToggle = () => {
    const [showSidebar, setShowSidebar] = useState(false); // custom hooks...  
    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return { showSidebar, handleToggleSidebar };
}

