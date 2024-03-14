import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashBoardToggle from '../components/Dashboard/DashBoardToggle'
import ChatRoomBtnModal from '../components/ChatRoom/ChatRoomBtnModal'
import ChatRoomList from '../components/ChatRoom/ChatRoomList'
import DividerWithData from '../components/DividerWithData'

const Home = () => {
  return (
    <>
      <Container className='h-100 pt-5' fluid>
        <Row>
          <Col xs={12} md={4}>
            <DashBoardToggle />
            <ChatRoomBtnModal />
            <DividerWithData>Join Conversation</DividerWithData>
              <ChatRoomList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home