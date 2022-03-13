import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import "./FeedTopBar.css";
import logoSmall from './logoSmall.svg'
import titleSmall from './titleSmall.svg';
import { AppContext } from '../../Hooks/AppContext';

export default function FeedTopBar(){

    const {user} = useContext(AppContext);

    let borderUser = {
        border: `2px solid ${user.color}`
    }

    return(
        <div className="topBar-container" >
            <div className="user-img">
                {user ? (
                    <Link to="/user/post" className="user-img" >
                        <img src={`${user.photo}`} alt="img not found" style={borderUser}/>
                    </Link>

                ) : (
                    <Link to="/" >Log in </Link>
                )}
            </div>
            
            <img src={logoSmall} className="logo" alt="img not found" />
            <img src={titleSmall} className="devs" alt="img not found" />
        </div>
    )
}