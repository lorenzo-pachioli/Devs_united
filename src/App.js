import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import getColections, {setDocument, deleteDocument, updateDocument } from "./Services/Operations";
/* import {db} from "./Services/firebase";
import { addDoc, collection } from "firebase/firestore"; */



function App() {

  const [tweetList, setList] = useState([]);
  const [tweetUpload, setTweet] = useState({
    Name:"",
    Tweet:"",
    Likes: 0
  });
  const [tweetUpdate, setUpdate] = useState({});
  const [buttonUpload , setButtonUpload] = useState(false);
  const [tweetDelete, setTweetDelete] = useState(null);
  const [buttonDelete, setButtonDelete] = useState(false);

  

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

  
 
 

  const handleInputs= (e) => {
    
    let tweet = {
      ...tweetUpload,
      [e.target.name] : e.target.value
      
    }
    setTweet(tweet);
  }

  const handleButton = (e) => {
    e.preventDefault();
    setButtonUpload(true);
  }

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <textarea 
          name="Tweet"
          type="text" 
          value={tweetUpload.Tweet} 
          placeholder="Tweet input" 
          onChange={handleInputs} 
          rows="5" 
          cols="30" 
        />
        <div display="flex" justify-content= "space-between">
          <input 
            name="Name"
            type="text" 
            value={tweetUpload.Name} 
            placeholder="Name input" 
            onChange={handleInputs} 
          />

          <button onClick={handleButton} value={buttonUpload}>Send tweet </button>

        </div>
        
        <div>
          {
            tweetList.map((tweet)=>{
              return(
                <div key={tweetList.indexOf(tweet)} >
                  <div display="flex" flex-direction="row">
                    <div>{tweet.Name} ({tweet.id}) : {tweet.Tweet}</div>
                    <button name = "Likes" onClick={handleLikes} value={tweet.id}>{tweet.Likes}</button>
                    <button onClick={()=>{return(
                       setTweetDelete(tweet.id),
                       setButtonDelete(true))}} >X</button>
                  </div>
                  
                </div>
              )
            }
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
