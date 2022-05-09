import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import "./FeedTopBar.css";
import logoSmall from './logoSmall.svg'
import titleSmall from './titleSmall.svg';
import { AppContext } from '../../Hooks/AppContext';

export default function FeedTopBar(){

    const {user, loading, setOtherUser} = useContext(AppContext);

    let borderUser = {
        border: `2px solid ${user.color}`
    }
    let loadingLogo = {
        transform: `${loading ? (`rotate(360deg)`):(``)}` 
        
    }
    const handleOtherUser = ()=> {
        setOtherUser({})
        sessionStorage.setItem("otherUser", null);
    }

    return(
        <div className="topBar-container" >
            <div className="user-img">
                {user.name ? (
                    <Link to="/user/post" className="user-img" >
                        <img src={`${user.photo}`} alt="img not found" style={borderUser}/>
                    </Link>

                ) : (
                    <Link to="/" className="user-img notUser">Log in </Link>
                )}
            </div>
            <Link to="/feed" className="feedLogo" onClick={handleOtherUser} >
                <img src={logoSmall} /* className="feedLogo"  */style={loadingLogo}  alt="img not found" />
            </Link>
            <img src={titleSmall} className="devs" alt="img not found" />
        </div>
    )
}