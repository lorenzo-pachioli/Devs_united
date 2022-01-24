import "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {setData, getDataById} from "./Operations";
import { auth } from "./firebase";


const provider = new GoogleAuthProvider();


const addUserToFirestore = async (user) => {
    
    const { id, displayName, email, photoURL } = user;
    console.log(user);
    const userExist = await getDataById("Users", id);
    if (!userExist) {
      await setData("Users", id, {
        name: displayName,
        email: email,
        photo: photoURL,
        uid: id
      });
    }
};


export default async function userAuth(){
    
    try {
        const userCredentials = await signInWithPopup(auth, provider);
        /* await addUserToFirestore(userCredentials.user); */
        console.log(userCredentials.user)
        return userCredentials.user;
      } catch (err) {
        console.log(err.message);
      }
    };
    


