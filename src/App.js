import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import getColections, {setDocument, deleteDocument} from "./Services/Operations";
/* import {db} from "./Services/firebase";
import { addDoc, collection } from "firebase/firestore"; */



function App() {

  const [tweetList, setList] = useState([]);
  const [tweetUpload, setTweet] = useState({
    Name:"",
    Tweet:""
  });
  const [buttonUpload , setButtonUpload] = useState(false);
  const [tweetDelete, setTweetDelete] = useState(null);
  const [buttonDelete, setButtonDelete] = useState(false);

  let tweetId = tweetList.length;
  

  /* useEffect para traer la coleccion de firebase */
  useEffect( () => {
    async function getData(){
      const tweets = await getColections("Tweets");
      setList(tweets);
    }

    getData();

  },[buttonUpload, buttonDelete]);

  /* useEffect para subir un tweet nuevo a la coleccion de firebase */
  useEffect(() => {
    async function uploadTweet(){
      const docRef = await setDocument("Tweets", tweetUpload, `${tweetId}`);
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
  }, [buttonUpload, tweetUpload, tweetId]);


  /* useEffect para eliminar un tweet de la coleccion de firebase */
  useEffect(() => {
    async function deleteTweet(){
      const docRef = await deleteDocument("Tweets", tweetDelete)
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
    
    
  }, [ tweetDelete, buttonDelete]);

  
 
 

  const handleInputs= (e) => {
    
    let newTweet = {
      ...tweetUpload,
      [e.target.name] : e.target.value
      
    }
    setTweet(newTweet);
  }

  const handleButton = (e) => {
    e.preventDefault();
    setButtonUpload(true);
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
