import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashBoardToggle from '../components/Dashboard/DashBoardToggle'
import ChatRoomBtnModal from '../components/ChatRoom/ChatRoomBtnModal'

const Home = () => {
  return (
      <>
        <Container className='h-100 pt-5' fluid>
          <Row>
            <Col xs={12} md={4}>
                <DashBoardToggle />
                <ChatRoomBtnModal />
            </Col>
          </Row>
        </Container>
      </>
  )
}

export default Home