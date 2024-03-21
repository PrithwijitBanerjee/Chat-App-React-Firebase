import React from 'react'
import TimeAgo from 'react-timeago';
import { useRooms } from '../../context/room.context';
import { NavLink } from 'react-router-dom';
import '../../styles/chatItem.css'
const ChatRoomItem = () => {
    const formatter = (value, unit, suffix) => {
        // Only show "Just now" for differences of less than 1 minute
        if (unit === 'second' && value < 60) {
            return 'Just now';
        }
        // Format other units (minutes and hours) normally
        return `${value} ${unit}${value > 1 ? 's' : ''} ${suffix}`;
    };

    const rooms = useRooms();

    return (
        <>
            {
                !rooms && (<div>
                    <h4 className='text-secondary'>No Rooms Yet ....</h4>
                </div>)
            }
            {
                rooms && rooms?.length !== 0 && rooms.map(room => (
                    <div key={room?.id} className='mt-4'>
                        <div className='d-flex justify-content-between text-center'>
                            <NavLink
                                style={{ fontWeight: 'bolder', fontSize: '1.5em' }}
                                className={`text-decoration-none text-secondary ${(isActive) => isActive && 'active'}`}
                                to={`/chat/${room?.id}`}
                            >{room?.name}
                            </NavLink>
                            <TimeAgo
                                date={new Date(room.createdAt)}
                                formatter={formatter}
                                minPeriod={60} // Update only every minute (60 seconds)    
                                className="mx-2 text-secondary"
                            />
                        </div>
                        <div className='d-flex justify-content-left text-secondary'>
                            <span>{room?.description}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ChatRoomItem