import { onSnapshot } from 'firebase/firestore';
import {collection, getDocs, addDoc, deleteDoc , doc  } from 'firebase/firestore/lite';
/* import firebase, {firestore} from "./firebase"; */
import {db} from "./firebase";

 

export default async function getColections(coll){
    
  const tweets = collection(db, coll);
  const tweetsList = await getDocs(tweets);
  const data = tweetsList.docs.map(doc => {return {
    Name:doc.data().Name,
    Tweet:doc.data().Tweet,
    id:doc.id
  }});
  return data;
}

export async function setDocument(coll, tweet){
  const docRef = await addDoc(collection(db, coll), tweet);
  return docRef;
}

export async function deleteDocument(coll, id){
  const docRef = await deleteDoc(doc(db, coll, id));
  return docRef;
}

export function getDoc(coll, callback){
  const docRef = collection(db, coll);
  return onSnapshot(docRef, callback);
}
