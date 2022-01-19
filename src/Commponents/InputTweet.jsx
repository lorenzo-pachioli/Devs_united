import React, {useContext,useState} from 'react';
import "./InputTweet.css";
import postOff from "../Resourses/postOff.svg";
import postOn from "../Resourses/postOn.svg";
import ornacia from '../Resourses/ornacia.png';
import { AppContext } from '../Hooks/AppContext';

export default function InputTweet(){
  
    const {tweetUpload, setTweet, setButtonUpload, buttonUpload} = useContext(AppContext);
    const [inputLong, setInputLong] = useState(0)
    
    
    const handleInputs= (e) => {
        const d = new Date();
        const date = d.getDate();
        console.log(date);
        
        let tweet = {
        /* ...tweetUpload, */
        [e.target.name] : e.target.value,
        Likes: "0",
        Name: "Lorenzo"
        }
        setTweet(tweet);
        setInputLong(tweet.Tweet.length);
        
    }

    const handleButton = (e) => {
        e.preventDefault();
        setButtonUpload(true);
        setInputLong(0);
    }
    
    return (
        <div className='input-container' >
            <div className='inputuser-img'>
                <img src={ornacia}   alt="img not found" /> 
            </div>
            
            <div className='input-tweet' >
                    <textarea
                        name="Tweet"
                        value={tweetUpload.Tweet}
                        onChange={handleInputs} 
                        type="text"
                        id='input-tweet'
                        placeholder="What's happening?" 
                        rows="5" 
                        cols="30" 
                        maxlength="200"
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
            
            
            {/* {post ? (
                <img src={postOff} alt="img not found" />
            ):(
                <img src={postOn} alt="img not found" />
            )}
             */}
        </div>
    )
}