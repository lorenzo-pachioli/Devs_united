import {collection, getDocs, getDoc, addDoc, deleteDoc , doc, updateDoc, setDoc,  arrayUnion, arrayRemove } from 'firebase/firestore/lite';
import {db} from "./firebase";

 

export default async function getColections(coll){
    
  const tweets = collection(db, coll);
  const tweetsList = await getDocs(tweets);
  const data = tweetsList.docs.map(doc => {return {
    Name:doc.data().Name,
    Tweet:doc.data().Tweet,
    likes:doc.data().likes,
    photo:doc.data().photo,
    email:doc.data().email,
    uid:doc.data().uid,
    id:doc.id, 
    date:doc.data().date
  }});
  return data;
}

export async function getUserColection(coll){
  const users = collection(db, coll);
  const usersList = await getDocs(users);
  const data = usersList.docs.map(doc => {return {
    name:doc.data().name,
    uid:doc.data().uid,
    username:doc.data().username,
    color:doc.data().color, 
    photo:doc.data().photo
  }});
  return data;
}

export async function getDataById(coll, id){
  const docRef = await getDoc(doc(db, coll, id));
  const data = docRef.data();
  return data;
}

export async function setDocument(coll, data){
  const docRef = await addDoc(collection(db, coll), data);
  return docRef;
}

export async function setData(coll, id, data){
  const docRef = await setDoc(doc(db, coll, id), data);
  return docRef;
}

export async function update(coll, id, data){
  const docRef = await updateDoc(doc(db, coll, id), data);
  return docRef;
}

export async function deleteDocument(coll, id){
  const docRef = await deleteDoc(doc(db, coll, id));
  return docRef;
}

export async function updateLikes(coll, id, likeNum){
  const docRef = await updateDoc(doc(db, coll, id), {
    likes: likeNum
  });
  return docRef;
}

export async function updateUser(coll, id, likeNum){
  const docRef = await updateDoc(doc(db, coll, id), {
    likes: arrayUnion(likeNum)
  });
  return docRef;
}

export async function deleteUser(coll, id, likeNum){
  const docRef = await updateDoc(doc(db, coll, id), {
    likes: arrayRemove(likeNum)
  });
  return docRef;
}

/* export function getDoc(coll, callback){
  const docRef = collection(db, coll);
  return onSnapshot(docRef, callback);
} */
