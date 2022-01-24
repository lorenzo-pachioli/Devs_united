import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useContext } from 'react';
import { Link, Route, Routes, } from "react-router-dom";
import getColections, {setDocument, deleteDocument, updateDocument } from "./Services/Operations";
import Welcome from "./Pages/Welcome";
import Feed from "./Pages/Feed";
import User from "./Pages/User";
import LoggedOut from "./Pages/LoggedOut";
import UserPost from "./Commponents/User/UserPost";
import UserFavorites from "./Commponents/User/UserFavorites";
import { AppContext } from './Hooks/AppContext';
/* import {db} from "./Services/firebase";
import { addDoc, collection } from "firebase/firestore"; */



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
          user
   } = useContext(AppContext);

  

  

  /* useEffect para traer la coleccion de firebase */
  useEffect( () => {
    async function getData(){
      const tweets = await getColections("Tweets");
      setList(tweets);
    }

    getData();

  },[]);

  /* useEffect para subir un tweet nuevo a la coleccion de firebase */
  useEffect(() => {
    async function uploadTweet(){
      
      const docRef = await setDocument("Tweets", tweetUpload);
      
      setList([...tweetList,
         {...tweetUpload,
          id:docRef.id
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
    
    
  }, [ tweetDelete, buttonDelete, tweetList]);

  useEffect(() => {
    
     async function updateTweet(){
       if (typeof tweetUpdate.Likes !== "undefined"){
        const docRef = await updateDocument("Tweets", tweetUpdate.id, tweetUpdate.Likes );
        
        return docRef;
       }
    } 
    updateTweet();
    
    
    

    
  }, [tweetUpdate]);

  
 
 


  

  const handleLikes = (event) => {
    const newList = tweetList.map((tweet)=>{
      if(tweet.id === event.target.value){
        const newLike = {
          Name: tweet.Name,
          Tweet: tweet.Tweet,
          Likes: tweet.Likes + 1,
          id: tweet.id
        }
        setUpdate(newLike);
        return newLike;
      }else{
        return tweet;
      }
    });
    setList(newList);

  }
  

  

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
