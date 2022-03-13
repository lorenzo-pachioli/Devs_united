import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import "./compWelcome.css";
import { AppContext } from '../Hooks/AppContext';


export default function CompWelcome(){
    const {user, setUser} = useContext(AppContext);
    

    const handleColor =  (event) => {
       setUser({
           ...user, 
           color:event.target.id
       })
       console.log(user)
     }
    const handleUsername = (event) => {
        setUser({
            ...user,
            username:event.target.value
        })
    } 

    const enable = {
        backgroundColor:`#00DA76` 
    }
    const disable = {
        backgroundColor: `grey`,
        opacity: `10%`
    }
    const selected = {
        border: `1px solid white`
    }

    return(
        <div className="container-welcome">
            <div>
                <h1>Welcome</h1>
                <h1 className="red-text">{user ? (user.name) : ("to Devs-united")}</h1>
            </div>
            <input type="text" className="input" onChange={handleUsername} value={user.username} placeholder="Type your username" />
            <h4>Select your color:</h4>
            <ul className="colours">
                <li className="square red" onClick={handleColor} style={user.color==="red" ? (selected):({})} id="#F50D5A"/>
                <li className="square orange" onClick={handleColor} style={user.color==="orange" ? (selected):({})} id="#FF865C"/>
                <li className="square yellow" onClick={handleColor} style={user.color==="yellow" ? (selected):({})} id="#FFEA5C"/>
                <li className="square green"onClick={handleColor} style={user.color==="green" ? (selected):({})} id="#00DA76"/>
                <li className="square blue" onClick={handleColor} style={user.color==="blue" ? (selected):({})} id="#0096CE"/>
                <li className="square purple" onClick={handleColor} style={user.color==="purple" ? (selected):({})} id="#800FFF"/>
            </ul>
            <Link to="/feed" className="continue" style={user.color ? (enable) : (disable)} >Continue</Link>
        </div>
    )
}