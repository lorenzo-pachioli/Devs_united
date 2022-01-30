import React, {useContext} from "react";
import "./TweetCard.css";
import heartOn from "../Resourses/heartOn.svg";
import heartOff from "../Resourses/heartOff.svg";
import userImg from "../Resourses/user.png";
import { AppContext } from '../Hooks/AppContext';

export default function TweetCard({id, uid, Likes, Tweet, Name, Date, photo}){

    const {setTweetDelete, setButtonDelete, buttonDelete, user} = useContext(AppContext);

    const handleDelete =()=>{
        setTweetDelete(`${id}`)
        setButtonDelete(true)
        
        console.log(buttonDelete);
    }
    

    const namebackground = {
        backgroundColor: "#800FFF"
    }

    return (
        <div className="card" >
             <div className="card-container" >
                <div className="card-img">
                    {photo  != null ? (
                        <img src={photo} alt="" />
                    ) : (
                        <img src={userImg} alt="" />
                    )}
                    
                </div>
                <div className="card-subcontainer">
                    <div className="name-date">
                        <div className="name" style={namebackground}>{Name}</div> 
                        <div className="date">- {`${Date}`} </div>
                        {user.uid === uid? (
                             <button onClick={handleDelete} value={buttonDelete} className="delete"> X </button>
                        ) : ("")}
                        
                        
                    </div>
                    
                    <div className="tweet">{Tweet}</div>
                    <div className="likes">
                        <button name = "Likes" /* onClick={handleLikes} */ value={uid}>
                        {Likes > 0 ? (
                            <img src={heartOn} alt="img not found" />
                        ) : (
                            <img src={heartOff} alt="img not found" />
                        )}
                        </button>
                        <div>{Likes}</div>
                    </div>
                </div>
            </div>
             <hr width="100%" />               
        </div>
       
    )
}