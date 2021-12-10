import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import getColections from "./Services/Operations";


function App() {

  const [tweetList, setList] = useState([]);

  useEffect( () => {
    async function getData(){
      const tweets = await getColections("Tweets");
      setList(tweets);
    }
    getData();
 
  },[]);
  console.log(tweetList)

  /* const ShowList = () => {
    if(tweetList.length > 0){
      tweetList.map((tweet)=>{
        return(
          <div key={tweet.id} >
            <p>{tweet.Name}</p>
            <p>{tweet.Tweet}</p>
          </div>
        )
      }
      )}else{
        return <p>Loading...</p>
      }
    } */

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {
            tweetList.map((tweet)=>{
              return(
                <div key={tweet.id} >
                  <p>{tweet.Name} : {tweet.Tweet}</p>
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
