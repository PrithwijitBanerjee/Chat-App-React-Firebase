import React, { useState } from 'react'
import { auth } from '../misc/firebase';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProfileConnect = () => {
    const [connection] = useState({
        "google.com": auth.currentUser.providerData.some(data => data.providerId === "google.com"),
        "facebook.com": auth.currentUser.providerData.some(data => data.providerId === "facebook.com")
    });
    return (
        <>
            {
                connection['google.com'] && (<Container className='pt-2 pb-2 ms-2'>
                    <Row>
                        <Col sm={12}>
                            <Button className='btn-success'>
                                <FontAwesomeIcon icon={faGooglePlusG} className="mx-1" />
                                connected
                                <FontAwesomeIcon icon={faTimes} className='ms-2' />
                            </Button>
                        </Col>
                    </Row>
                </Container>)
            }

            {
                connection['facebook.com'] && !connection['facebook.com'] && (
                    <Container className='mt-4 mb-5'>
                        <Row>
                            <Col>
                                <Button className='btn-primary w-100'>
                                    <FontAwesomeIcon icon={faFacebookF} className="mx-1" />
                                    Connect With Facebook
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }

            {
                !connection['facebook.com'] && !connection['google.com'] && (
                    <Container className='mt-4 mb-5'>
                        <Row>
                            <Col>
                                <Button className='btn-primary w-100'>
                                    <FontAwesomeIcon icon={faFacebookF} className="mx-1" />
                                    Connect With Facebook
                                </Button>
                            </Col>
                            <Col>
                                <Button className='btn-success w-100'>
                                    <FontAwesomeIcon icon={faGooglePlusG} className="mx-1" />
                                    Connect With Google
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </>
    )
}

export default ProfileConnect