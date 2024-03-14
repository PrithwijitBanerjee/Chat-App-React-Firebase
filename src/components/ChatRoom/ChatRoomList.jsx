import React from 'react'
import ChatRoomItem from './ChatRoomItem'
import { Col, Container, Row } from 'react-bootstrap'

const ChatRoomList = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div
                            style={{
                                maxHeight: '500px',
                                overflowY: 'scroll',
                                width: '78%',
                                marginTop: '60px',
                                /* Custom scrollbar styles */
                                scrollbarColor: '#888 #f1f1f1', /* Firefox */
                            }}>
                            <ChatRoomItem />
                    
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ChatRoomList