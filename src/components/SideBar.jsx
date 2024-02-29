import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "../styles/sidebar.css";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useProfileContext } from '../context/profile.context';
import { auth, database } from '../misc/firebase';
import { toast } from 'react-toastify';
import Divider from './Divider';
import EditableInput from './EditableInput';
import {ref,set} from "firebase/database";
import ProfileConnect from './ProfileConnect';

const SideBar = ({ show, handleClose }) => {
    const { profile } = useProfileContext();
    const onSaveChanges = async newData => {
        let userRef = ref(database, 'profiles/' + profile.uid + '/name');
        try{
            set(userRef, newData);
          toast.success("Nick Name Edited Successfully!",{
            theme: 'colored',
            position:'top-center'
          });
        }catch(error){
            toast.error(error.message,{
                theme: 'colored',
                position: 'top-center'
            });
        }
    }
    const onSignOut = useCallback(() => {
        auth.signOut()
            .then(() => {
                handleClose();
                toast.success(`${profile?.name} has signed out successfully!`, {
                    theme: 'colored',
                    position: 'top-center'
                });
            })
            .catch(error => {
                toast.error('Sign out failed. Please try again.');
            });
        handleClose();
    }, [handleClose, profile]);
    return (
        <div className={`sidebar ${show ? 'show' : ''}`}>
            <button className="close-btn" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} className="close-icon" />
            </button>
            {/* Content of the Sidebar */}
            <div className='mt-2 ms-4'>
                <h3>User DashBoard</h3>
            </div>
            <Divider />
            {/* header section */}
            <Container className='mt-5'>
                <Row>
                    <Col className='ms-4'>
                        <h4>Hey, {profile?.name}</h4>
                        <ProfileConnect/>
                    </Col>
                </Row>
            </Container>
            {/* body section */}
            <Container>
                <Row>
                    <Col>
                        <Divider/>
                        <EditableInput 
                            name="nickname"
                            initialValue={profile?.name}
                            label={<h5 className='mt-4'>Nick Name</h5>}
                            onSave={onSaveChanges}
                        />
                    </Col>
                </Row>
            </Container>
            {/* footer */}
            <Container fluid>
                <Row>
                    <Col className='signout-btn'><Button className='btn-danger w-100' onClick={onSignOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> {/* Sign out icon */}
                        Sign Out
                    </Button></Col>
                </Row>
            </Container>
        </div>
    );
};
export default SideBar;