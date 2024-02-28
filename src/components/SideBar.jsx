import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../styles/sidebar.css";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useProfileContext } from '../context/profile.context';
import { auth } from '../misc/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const { profile } = useProfileContext();
    const onSignOut = useCallback(() => {
        auth.signOut()
            .then(() => {
                handleClose();
                toast.success(`${profile.name} has signed out successfully!`, {
                    theme: 'colored',
                    position: 'top-center'
                });
                navigate("/signIn");
            })
            .catch(error => {
                toast.error('Sign out failed. Please try again.');
            });
        handleClose();
    }, [handleClose,navigate,profile]);
    return (
        <div className={`sidebar ${show ? 'show' : ''}`}>
            <button className="close-btn" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </button>
            {/* Content of the Sidebar */}
            <div className='mt-2 ms-4'>
                <h3>User DashBoard</h3>
            </div>
            {/* header section */}
            <Container className='mt-5'>
                <Row>
                    <Col className='ms-4'>
                        <h4>Hi! {profile.name}</h4>
                    </Col>
                </Row>
            </Container>
            {/* body section */}
            <Container>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
            {/* footer */}
            <Container fluid>
                <Row>
                    <Col className='signout-btn'><Button className='btn-danger w-100' onClick={onSignOut}>Sign Out</Button></Col>
                </Row>
            </Container>
        </div>
    );
};
export default SideBar;