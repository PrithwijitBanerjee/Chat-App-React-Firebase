import { useParams } from 'react-router-dom'
import { useRooms } from '../context/room.context';
import ChatTop from '../components/chat-window/ChatTop';
import ChatBody from '../components/chat-window/ChatBody';
import ChatFooter from '../components/chat-window/ChatFooter';

const ChatPage = () => {
  const { id } = useParams();
  const rooms = useRooms();
  let currRoom = rooms ? rooms?.find(room => room.id === id) : null;
  return (
    <>
      {
        !rooms && (<div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <h2>No Room Yet ...</h2>
        </div>)
      }
      {
        currRoom && Object.keys(currRoom).length > 1 && (<div className='d-flex justify-content-center flex-column'>
          <ChatTop />
          <ChatBody />
          <ChatFooter />
        </div>)
      }
    </>
  )
}

export default ChatPage