import { useRef, useState } from 'react'
import { allSupportedFiles, isValidFile } from '../../utlis/fileType'
import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import AvatarEditor from 'react-avatar-editor'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { database, storage } from '../../misc/firebase';
import { useProfileContext } from '../../context/profile.context';
import { ref as userRef, set } from 'firebase/database';


const getBlob = async canvas => {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) {
        resolve(blob);
      } else {
        reject("File process failed!");
      }
    });
  })
}
const AvatarUploadBtn = () => {
  const [show, setShow] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const avatarEditorRef = useRef();
  const { profile } = useProfileContext(); // custom hooks
  const onUploadAvatar = async () => {
    const canvasAvatarImg = avatarEditorRef.current.getImageScaledToCanvas();
    setIsLoading(true);
    try {
      let blobFiles = await getBlob(canvasAvatarImg);
      // Create a storage reference from our storage service
      // Create a child reference
      const avatarStorageRef = ref(storage, `/profiles/${profile.uid}/avatar`);
      // 'file' comes from the Blob or File API
      let uploadAvatarRes = await uploadBytes(avatarStorageRef, blobFiles, {
        cacheControl: `public, max-age=${3600 * 24 * 3}`
      });
      let downloadUrl = await getDownloadURL(uploadAvatarRes.ref);
      set(userRef(database, `profiles/${profile.uid}/avatar`), downloadUrl);
      toast.success("Avatar has been uploaded", {
        theme: 'colored',
        position: 'top-center'
      });
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.message, {
        theme: 'colored',
        position: 'top-center'
      });
      setIsLoading(false);
    }

  }
  const onFileChange = e => {
    let allFiles = e.target.files;
    if (allFiles.length === 1) {
      const file = allFiles[0];
      if (isValidFile(file)) {
        setAvatarFile(file);
        setShow(true);
      } else {
        toast.error(`Invalid File type ${file.type}`, {
          theme: 'colored',
          position: 'top-center'
        });
        setAvatarFile(null);
      }
    }
  }
  return (
    <>
      <div className='mt-5 text-center'>
        <label htmlFor='avatar-upload' className='d-block p-3' style={{ cursor: "pointer" }}>
          Select New Avatar
          <input
            type='file'
            className='d-none'
            id='avatar-upload'
            accept={allSupportedFiles.join()}
            onChange={onFileChange}
          />
        </label>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Adjust and Upload Avatar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <AvatarEditor
              ref={avatarEditorRef}
              image={avatarFile}
              width={200}
              height={250}
              border={10}
              borderRadius={100}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={1.2}
              rotate={360}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='w-100'
            variant="outline-primary"
            onClick={onUploadAvatar}
            disabled={isLoading}>
            Upload New Image
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AvatarUploadBtn