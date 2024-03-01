import React from 'react'
import { Spinner } from 'react-bootstrap'

const SpinnerLoader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Spinner animation="border" variant="success" />
        </div>
    )
}

export default SpinnerLoader