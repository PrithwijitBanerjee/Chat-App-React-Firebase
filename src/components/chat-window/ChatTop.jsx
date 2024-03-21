import React, { memo } from 'react'
import { useCurrentRoom } from '../../context/current-room.context'

const ChatTop = () => {
    const name = useCurrentRoom(v => v.name);
    return (
        <>
                
            <h1>Top</h1>
            <h3>{name}</h3>
        </>
    )
}

export default memo(ChatTop)