import { useProfileContext } from '../context/profile.context'
import { database } from '../misc/firebase';
import { ref } from 'firebase/database';

const UserAvatarRefDB = () => {
  const {profile} = useProfileContext();  
  const userRef = ref(database, `profiles/${profile.uid}/avatar`);  
  return  userRef;
}

export default UserAvatarRefDB