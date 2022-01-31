import logo from './logo.svg';
import './App.css';
import React, { useEffect, useContext, useState } from 'react';
import { Route, Routes, } from "react-router-dom";
import getColections, {setDocument, deleteDocument, updateLikes, updateUser, getDataById } from "./Services/Operations";
import Welcome from "./Pages/Welcome";
import Feed from "./Pages/Feed";
import User from "./Pages/User";
import LoggedOut from "./Pages/LoggedOut";
import UserPost from "./Commponents/User/UserPost";
import UserFavorites from "./Commponents/User/UserFavorites";
import { AppContext } from './Hooks/AppContext';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./Services/firebase";
import {arrayUnion} from "firebase/firestore";




function App() {
  const {
          tweetList,
          setList,
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
          setUser
   } = useContext(AppContext);
   const [uidProb, setUid] = useState()
   

  useEffect(() => {

    async function currentUser(){
      onAuthStateChanged(auth,  (user) => {
        if (user) {
          setUid(user)
          setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid
          
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
            likes: oldUser.likes
          
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

  

  /* useEffect para subir un tweet nuevo a la coleccion de firebase */
  useEffect(() => {
    async function uploadTweet(){
      
      const docRef = await setDocument("Tweets", tweetUpload);
      setList([...tweetList,
        {...tweetUpload,
          id: docRef.id
     }])
     
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
  }, [buttonUpload, tweetUpload, tweetList]);


  /* useEffect para eliminar un tweet de la coleccion de firebase */
  useEffect(() => {
    async function deleteTweet(){
      const docRef = await deleteDocument("Tweets", tweetDelete);
      console.log(tweetDelete)
      const newList = tweetList.filter((ID)=>ID.id !== `${tweetDelete}`);
      console.log(newList)
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
    
    
  }, [ tweetDelete, buttonDelete, tweetList]);

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
    updateTweet();
    upDateUser();
    
    
    

    
  }, [tweetUpdate]);

  
 
 


  

 
  

  

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
          
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/" element={<LoggedOut />} />
        
      </Routes>
    </div>
  );
}

export default App;
