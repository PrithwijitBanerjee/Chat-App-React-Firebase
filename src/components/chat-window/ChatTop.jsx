import React, { memo, useState } from 'react'
import { useCurrentRoom } from '../../context/current-room.context'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ChatTop = () => {
    const [show, setShow] = useState(false);
    const name = useCurrentRoom(v => v.name);
    const description = useCurrentRoom(v => v.description);
    return (
        <>
            <div className='mb-5'>
                <div className='d-flex justify-content-between'>
                    <h3>{name}</h3>
                    <button className='mx-5 btn '>todo</button>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='text-decoration-underline text-primary bg-white'
                        style={{ border: 'none' }}
                        onClick={() => setShow(true)}>
                        Room Information
                    </button>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>About, {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='w-100' variant="danger" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default memo(ChatTop)