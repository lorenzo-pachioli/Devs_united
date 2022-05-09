import React, {useContext,useState} from 'react';
import "./InputTweet.css";
import postOff from "../../Resourses/postOff.svg";
import postOn from "../../Resourses/postOn.svg";
import ornacia from '../../Resourses/ornacia.png';
import { AppContext } from '../../Hooks/AppContext';

export default function InputTweet(){
  
    const {tweetUpload, setTweet, setButtonUpload, buttonUpload, user} = useContext(AppContext);
    const [inputLong, setInputLong] = useState(0)
    const month = [" January "," February "," March ", " April "," May "," June "," July "," August "," September "," October "," November "," December "];

    
    
    const handleInputs= (e) => {
        const d = new Date();
        if (user) {
            let tweet = {
                
                [e.target.name] : e.target.value,
                likes: 0,
                Name: `${user.name}`,
                photo: `${user.photo}`,
                uid: `${user.uid}`,
                email: `${user.email}`,
                date: `${d.getDate()+ month[d.getMonth()] + d.getFullYear()}`
                }
                
                setTweet(tweet);
                
                setInputLong(tweet.Tweet.length);  
            }else{
                alert("you must be logged in to write tweet");
            }
       
        
           
    }

    const handleButton = (e) => {
        e.preventDefault();
        setButtonUpload(true);
        setInputLong(0);
        
    }
   
    
    return (
        <div className='input-container' >
            <div className='inputuser-img'>
                {user.uid ? (
                    <img src={`${user.photo}`}  alt="img not found" />

                ) : (
                    <img src={ornacia}   alt="img not found" />
                )}
                 
            </div>
            
            <div className='input-tweet' >
                    <textarea
                        name="Tweet"
                        value={tweetUpload.Tweet}
                        onChange={handleInputs} 
                        type="text"
                        id='input-tweet'
                        placeholder={user.uid ? ("What's happening?" ) : ("Must be logged in to post")}
                        rows="5" 
                        cols="30" 
                        maxLength="200"
                        disabled={user.uid ? (false) : (true)}
                        />
                
                
                <div className='sub-textarea'>
                    <h5>{inputLong}</h5>
                    <h5>200 max.</h5>
                </div>
                <div className='container-post-button'>
                    {inputLong === 0 ? (
                        <img src={postOff} 
                        className='post-button' 
                        alt="img not found" 
                   />

                    ) : (
                        <img src={postOn} 
                         className='post-button' 
                         alt="img not found"
                         onClick={handleButton} 
                         value={buttonUpload} 
                    />
                    )}
                    
                </div>
                
            </div>
            
        </div>
    )
}