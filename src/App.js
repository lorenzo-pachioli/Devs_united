import './App.css';
import React, { useEffect, useContext, useState } from 'react';
import { Route, Routes, } from "react-router-dom";
import getColections, {setDocument, deleteDocument, updateLikes, updateUser, getDataById, deleteUser,  getUserColection } from "./Services/Operations";
import Welcome from "./Pages/Welcome";
import Feed from "./Pages/Feed";
import User from "./Pages/User";
import LoggedOut from "./Pages/LoggedOut";
import UserPost from "./Commponents/User/UserPost";
import UserFavorites from "./Commponents/User/UserFavorites";
import OtherUser from "./Pages/OtherUser";
import { AppContext } from './Hooks/AppContext';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./Services/firebase";
import { update } from "./Services/Operations";




function App() {
  const {
          tweetList,
          setList,
          setUsersList,
          tweetUpload,
          setTweet,
          tweetUpdate,
          setUpdate,
          buttonUpload,
          setButtonUpload,
          tweetDelete,
          setTweetDelete,
          buttonDelete,
          setButtonDelete, 
          user,
          setUser, 
          setArrayDel, 
          arrayDelete
   } = useContext(AppContext);
   const [uidProb, setUid] = useState()
   

  useEffect(() => {

    async function currentUser(){
      onAuthStateChanged(auth,  (user) => {
        if (user) {
          setUid(user)
          console.log(user)
          setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
            likes: [],
            color: null, 
            username: ""
          
        })
        } 
      })
      
    }
  
    currentUser();

    
    
  },[setUid, setUser ]);

  useEffect(() => {
    async function userLikes(){
      if(uidProb){
        const oldUser = await getDataById("Users", uidProb.uid);
        setUser({
            name: uidProb.displayName,
            email: uidProb.email,
            photo: uidProb.photoURL,
            uid: uidProb.uid,
            likes: oldUser.likes, 
            color: oldUser.color, 
            username: oldUser.username
          
        })
      }
      
    }

    userLikes();
  }, [uidProb, setUser]);

  

  /* useEffect para traer la coleccion de firebase */
  useEffect( () => {
    async function getData(){
      const tweets = await getColections("Tweets");
      setList(tweets);
    }
    
    getData();

  },[setList]);

  /* useEffect para traer la lista de ususarios */
  useEffect( () => {
    async function getData(){
      const users = await  getUserColection("Users");
      setUsersList(users);
    }
    
    getData();

  },[setUsersList]);

  

  /* useEffect para subir un tweet nuevo a la coleccion de firebase */
  useEffect(() => {
    async function uploadTweet(){
      console.log(tweetUpload)
      const docRef = await setDocument("Tweets", tweetUpload);
      const upDate = [...tweetList,
        {...tweetUpload,
          id: docRef.id
     }]
      setList(upDate)
      
      console.log(tweetList)
     
      return docRef;
    }
    const upload = ()=> {
      if(buttonUpload){
        uploadTweet()
        
        setButtonUpload(false);
        setTweet({
          Name:"",
          Tweet:""
        });
      }
    }

    

    upload();
    setList(tweetList)
  }, [buttonUpload, tweetUpload, tweetList, setButtonUpload, setList, setTweet]);


  /* useEffect para eliminar un tweet de la coleccion de firebase */
  useEffect(() => {
    async function deleteTweet(){
      const docRef = await deleteDocument("Tweets", tweetDelete);
      
      const newList = tweetList.filter((ID)=>ID.id !== `${tweetDelete}`);
      
      setList(newList);
      return docRef;
    }
    const runDeleteTweet = () => {
      if (buttonDelete){
        deleteTweet();
        setTweetDelete(null);
        setButtonDelete(false);
      }
    }
    runDeleteTweet();
    
    
  }, [ tweetDelete, buttonDelete, tweetList, setButtonDelete, setList, setTweetDelete]);

  //useEfect para actualizar likes

  useEffect(() => {
    
     async function updateTweet(){
       if (typeof tweetUpdate.likes !== "undefined"){
        const docRef = await updateLikes("Tweets", tweetUpdate.id, tweetUpdate.likes );
        setUpdate("");
        return docRef;
       }
    } 
    async function upDateUser(){
      if (typeof tweetUpdate.id !== "undefined"){
       const docRef = await updateUser("Users", user.uid, String(tweetUpdate.id));
       
       
       return docRef;
      }
    }

      async function deleteIdArray(){
        if (typeof tweetUpdate.id !== "undefined"){
         const docRef = await deleteUser("Users", user.uid, String(arrayDelete.id));
         setArrayDel({})
         
         return docRef;
        }
   } 
    updateTweet();
    upDateUser();
    deleteIdArray();
    
    
    

    
  }, [tweetUpdate, arrayDelete, setArrayDel,setUpdate, user]);


  useEffect(()=>{
    const upDateColor = async () => {
       const docRef = await update("Users", user.uid, {color: user.color});
       return docRef;
    }

    if(user.color){
      upDateColor();
    }
    
},[user]);

useEffect(()=>{
  const upDateUsername = async () => {
     const docRef = await update("Users", user.uid, {username: user.username});
     return docRef;
  }

  if(user.username){
    upDateUsername();
  }
  
},[user]);
 
 


  

 
  

  

  return (
    <div className="App">
      <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route>
            {user ? (
              <Route path="/user" element={<User />}>
                <Route path="post" element={<UserPost />} />
                <Route path="favorites" element={<UserFavorites />} />
              </Route>

            ) : (
              ""
            )}
          </Route>
          <Route path="/otherUser" element={<OtherUser/>} />

          
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/" element={<LoggedOut />} />
        
      </Routes>
    </div>
  );
}

export default App;
