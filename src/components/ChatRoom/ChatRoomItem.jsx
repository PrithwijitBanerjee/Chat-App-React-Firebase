import React from 'react'
import TimeAgo from 'react-timeago';

const ChatRoomItem = () => {
    const formatter = (value, unit, suffix) => {
        // Only show "Just now" for differences of less than 1 minute
        if (unit === 'second' && value < 60) {
            return 'Just now';
        }
        // Format other units (minutes and hours) normally
        return `${value} ${unit}${value > 1 ? 's' : ''} ${suffix}`;
    };
    return (
        <>
            <div className='d-flex justify-content-between text-center'>
                <h3 className='text-secondary' style={{fontWeight: 'bolder'}}>Room Name</h3>
                <TimeAgo
                    date={new Date()}
                    formatter={formatter}
                    minPeriod={60} // Update only every minute (60 seconds)    
                    className="mx-2 text-secondary"
                />
            </div>
            <div className='d-flex justify-content-left text-secondary'>
                <span>No Messages yet ....</span>
            </div>
        </>
    )
}

export default ChatRoomItem