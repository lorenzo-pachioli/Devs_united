import "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider, signOut,  onAuthStateChanged  } from "firebase/auth";
import {setData, getDataById} from "./Operations";
import { auth } from "./firebase";


const provider = new GoogleAuthProvider();


const addUserToFirestore = async (user) => {
    
    const { uid, displayName, email, photoURL } = user;
    console.log(user);
    const userExist = await getDataById("Users", uid);
    console.log(userExist);
    if (!userExist) {
      await setData("Users", uid, {
        name: displayName,
        email: email,
        photo: photoURL,
        uid: uid
      });
    }
};


export default async function userAuth(){
    
    try {
        const userCredentials = await signInWithPopup(auth, provider);
         addUserToFirestore(userCredentials.user);
        console.log(userCredentials.user)
        return userCredentials.user;
      } catch (err) {
        console.log(err.message);
      }
    };
    
export const loggedOut = async () => {
   signOut(auth);
};

