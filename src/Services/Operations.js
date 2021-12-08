import {getFirestore, collection, getDocs } from 'firebase/firestore/lite';
/* import firebase, {firestore} from "./firebase"; */
import {app} from "./firebase";

const db = getFirestore(app);

export default async function getColections(coll){
    const tweets = collection(db, coll);
    const tweetsList = await getDocs(tweets);
    const data = tweetsList.docs.map(doc => doc.data());
    return data;
}
