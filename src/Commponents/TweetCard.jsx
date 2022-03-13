import React, {useContext, useState} from "react";
import "./TweetCard.css";
import heartOn from "../Resourses/heartOn.svg";
import heartOff from "../Resourses/heartOff.svg";
import userImg from "../Resourses/user.png";
import trashCan from "../Resourses/trash-can-solid.svg";
import loading from "../Resourses/loading.gif";
import { AppContext } from '../Hooks/AppContext';
import { Link } from "react-router-dom";

export default function TweetCard({id, uid, Likes, Tweet, Name, color, Date, photo, heartOnOff}){

    const {setTweetDelete, setButtonDelete, buttonDelete, user,  tweetList, setUpdate, setList, setArrayDel,otherUser, setOtherUser} = useContext(AppContext);

    const [heartColor, setColor] = useState(heartOnOff)
   
  
  
   

    const handleDelete =()=>{
        let deleteConfirmation  = window.confirm('Quieres eliminar el tweet?');
        if(deleteConfirmation ){
            setTweetDelete(`${id}`)
            setButtonDelete(true)
        }
    }

   

    const handleLikes = () => {
        const changeLike = ()=>{
            if(heartOnOff ){
                heartOnOff = false;
                setColor(false)
                
            }else{
                heartOnOff = true;
                setColor(true)
                
            }
        }
        changeLike();
        const ID = String(id);

        const newList = tweetList.map((tweet)=>{
          if(tweet.id === ID){

            if(heartOnOff){
                const newLike = {
                    ...tweet,
                    likes: tweet.likes + 1,
                    
                }
                setUpdate(newLike);
                user.likes.push(newLike.id)
                
                return newLike
            }else{
                const newLike = {
                    ...tweet,
                    likes: tweet.likes - 1,
                    
                  }
                  setUpdate(newLike);
                  setArrayDel(newLike);
                  user.likes.pop(newLike.id);
                  return newLike
            } 
          }else{
            return tweet;
          }
        });
        setList(newList);
      }

      const handleOtherUser = () => {
          
        setOtherUser({
            Name: Name,
            uid: uid, 
            photo:photo, 
            color:color
        })
        sessionStorage.setItem("uid", uid );
        sessionStorage.setItem("Name", Name );
        sessionStorage.setItem("photo", photo );
        sessionStorage.setItem("color", color );
        
        
      }

      

     
    

    const namebackground = {
        backgroundColor: `${color ? (color) : (uid === user.uid ? (user.color):("#800FFF"))}`
    }

    const ShowResult = ()=> {
        return (
            <div className="card-container" >
                <div className="card-img">
                    {photo  != null ? (
                        <img src={photo} alt="" />
                    ) : (
                        <img src={userImg}  alt="" />
                    )}
                    
                </div>
                <div className="card-subcontainer">
                    <div className="name-date">
                        {Object.keys(otherUser).length > 0 ? (<div>
                            {uid === user.uid ? (
                                <Link to="/user/post"  className="name" style={namebackground} >{Name}</Link>
                            ):(
                                <Link to="/otherUser" className="name" style={namebackground} onClick={handleOtherUser}>{Name}</Link>
                                
                            )}</div>
                            
                        ) : (
                            <div className="name" style={namebackground} onClick={handleOtherUser}>{Name}</div>
                        )} 
                        <div className="date">- {Date} </div>
                        {user.uid === uid? (
                             <button onClick={handleDelete} value={buttonDelete} className="delete"> 
                                <img src={trashCan} className="trashCan" fill="white" alt="img not found" /> 
                             </button>
                        ) : ("")}
                        
                        
                    </div>
                    
                    <div className="tweet">{Tweet}</div>
                    <div className="likes">
                        <button name = "Likes" onClick={handleLikes} value={id}>
                        {heartColor  ? (
                            <img src={heartOn} alt="img not found" />
                        ) : (
                            <img src={heartOff} alt="img not found" />
                        )}

                        
                    
                        </button>
                        <div>{Likes}</div>
                    </div>
                </div>
            </div>
        )
    }
   

    return (
        <div className="card" >
            {Name ? ( 
                <ShowResult />
            ):(
                <div className="card-container">
                    <div className="card-img">
                        <img src={loading} className="" alt="not img found" />
                    </div> 
                    
                </div>
                
            )}
             
             <hr width="100%" />               
        </div>
       
    )
}