import React from 'react'
import '../styles/utility.css'
const DividerWithData = ({ children }) => {
    return (
        <div className='d-flex justify-content-around mt-5' style={{width: '78%'}}>
            <div className='horizontal-divider-data-section'></div>
            <div>{children}</div>
            <div className='horizontal-divider-data-section'></div>
        </div>
    )
}

export default DividerWithData