import React from 'react';
import userImg from "./user.png";
/* import postOff from "src/Resourses/postOff.svg";
import postOn from "src/Resourses/post on.svg"; */

export default function InputTweet(){
    
    return (
        <div display="flex" flex-direction="row">
            <img src={userImg} alt="img not found" />
            <div display="flex" >
                <textarea 
                name="Tweet"
                type="text" 
               /*  value={tweetUpload.Tweet}  */
                placeholder="Tweet input" 
                /* onChange={handleInputs}  */
                rows="5" 
                cols="30" 
                />
                <div>
                    <h5>17</h5>
                    <h5>200 max.</h5>
                </div>
                {/* <img src={postOff} alt="img not found" /> */}
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