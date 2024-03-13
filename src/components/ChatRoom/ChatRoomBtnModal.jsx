import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { push, ref, serverTimestamp, set } from "firebase/database"
import { database } from '../../misc/firebase';
import { toast } from 'react-toastify';

const INITIAL_FORM_VALUE = {
    name: '',
    description: ''
}
const ChatRoomBtnModal = () => {
    const [show, setShow] = useState(false);
    const [formValue, setFormValue] = useState(INITIAL_FORM_VALUE);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState({});

    // On submit Validation ...
    const validation = () => {
        let error = {};
        if (!formValue.name) {
            error.nameErr = " ** Name is required";
        } else if (!(isNaN(formValue.name))) {
            error.nameErr = " ** Please Enter Text in Name field";
        }
        if (!formValue.description) {
            error.descErr = " ** Description is required";
        }
        return error;
    }

    const handleInput = (e) => {
        if (e.target.name === "name") {
            setFormValue(prevFormValue => {
                return { ...prevFormValue, [e.target.name]: e.target.value }
            });
        }

        if (e.target.name === "description") {
            setFormValue(prevFormValue => {
                return { ...prevFormValue, [e.target.name]: e.target.value }
            });
        }
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        const errStatus = validation();
        setErr(errStatus);
        if (Object.keys(errStatus).length > 0) {
            return false;
        }

        setIsLoading(true);
        const newRoomDetail = {
            ...formValue,
            createdAt: serverTimestamp()
        }

        try {
            const dbRef = ref(database, `rooms/`);
            const newRoomRef = push(dbRef); // Generate a new child reference with a unique random ID
            await set(newRoomRef, newRoomDetail);
            toast.success(`${formValue?.name} room has been created succesfully!!!`, {
                theme: 'colored',
                position: 'top-center'
            });
            setIsLoading(false);
            setShow(false);
            setFormValue(INITIAL_FORM_VALUE);
        } catch (error) {
            toast.error(error?.message, {
                theme: 'colored',
                position: 'top-center'
            });
            setIsLoading(false);
        }
    }
    return (
        <>
            <Button variant="outline-success w-75 mt-3" onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faRocket} /> Create New ChatRoom
            </Button>


            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Chat Room
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='pt-1 pb-3'>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="inputRoomName">Password</Form.Label>
                            <Form.Control
                                type="text"
                                name='name'
                                id="inputRoomName"
                                aria-describedby="passwordHelpBlock"
                                placeholder='Enter Chat Room Name...'
                                value={formValue.name}
                                onChange={handleInput}
                            />
                            <span className='text-danger'>{err?.nameErr}</span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name='description'
                                value={formValue.description}
                                onChange={handleInput}
                            />
                            <span className='text-danger'>{err?.descErr}</span>
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='info text-white w-100' onClick={handleFormSubmit}>Create New Chat Room</Button>
                    <Button variant='secondary text-white w-100' onClick={() => {
                        setErr({});
                        setFormValue(INITIAL_FORM_VALUE);
                    }}>Reset Room</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChatRoomBtnModal