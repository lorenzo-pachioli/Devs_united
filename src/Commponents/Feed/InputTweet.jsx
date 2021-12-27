import React, {useState} from 'react';
import userImg from "src/Resourses/user.png";
import postOff from "src/Resourses/post off.svg";
import postOn from "src/Resourses/post on.svg";

export default function InputTweet(){
    const [post, setPost] = useState(false)
    return (
        <div>
            <div>
                <img src={userImg} alt="img not found" />
                <textarea 
                name="Tweet"
                type="text" 
               /*  value={tweetUpload.Tweet}  */
                placeholder="Tweet input" 
                /* onChange={handleInputs}  */
                rows="5" 
                cols="30" 
                />
            </div>
            <div>
                <h5>17</h5>
                <h5>200 max.</h5>
            </div>
            {post ? (
                <img src={postOff} alt="img not found" />
            ):(
                <img src={postOn} alt="img not found" />
            )}
            
        </div>
    )
}