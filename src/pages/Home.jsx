import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashBoardToggle from '../components/Dashboard/DashBoardToggle'
import ChatRoomBtnModal from '../components/ChatRoom/ChatRoomBtnModal'
import ChatRoomList from '../components/ChatRoom/ChatRoomList'
import DividerWithData from '../components/DividerWithData'
import RoomProvider from '../context/room.context'
import ChatPage from './ChatPage'
import '../styles/home.css'
const Home = () => {
  return (
    <>
      <RoomProvider>
        <Container className='h-100 pt-5 main-container' style={{height: '100%'}} fluid>
          <Row>
            <Col xs={12} md={6} className="left-sidebar">
              <DashBoardToggle />
              <ChatRoomBtnModal />
              <DividerWithData>Join Conversation</DividerWithData>
              <ChatRoomList />
            </Col>
            <Col xs={12} md={6} className="right-sidebar">
              <ChatPage />
            </Col>
          </Row>
        </Container>
      </RoomProvider>
    </>
  )
}

export default Home