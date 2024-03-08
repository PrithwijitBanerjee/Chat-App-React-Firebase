import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import "../styles/signIn.css";
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import {  ref, set } from "firebase/database";
import { auth, database } from '../misc/firebase';
import { toast } from 'react-toastify';
import {serverTimestamp} from "firebase/database"


const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const credential = await signInWithPopup(auth, provider);
      const userMeta = getAdditionalUserInfo(credential);
      if(userMeta?.isNewUser){
          await set(ref(database,`profiles/${credential.user.uid}`),{
            name: credential?.user?.displayName,
            createdAt: serverTimestamp()
          });
      }
      toast.success(`${credential.user.displayName} has signedIn Successfully`,{
        theme:'colored'
      });
    } catch (err) {
        toast.error(`${err?.message}`,{
          theme: 'colored',
          position: "top-center",
        });
    }
  }
  const onGoogleClick = async () => {
    await signInWithProvider(new GoogleAuthProvider());
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Container>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }}>
              <div className='text-align-center pt-5'>
                <h1 className='header-title'>Welcome To Chat</h1>
                <p>Progressive Chat Platform For Neophyte</p>
              </div>
              <div className='mt-5 d-flex justify-content-center'>
                <Button variant="success" className="w-75" onClick={onGoogleClick}>
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" /> <span className="ml-5">Continue With Google</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SignIn