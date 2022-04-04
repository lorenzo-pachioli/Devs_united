import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { loggedOut } from "../../Services/autentication";
import { AppContext } from '../../Hooks/AppContext';
import back from '../../Resourses/back.svg';
import logout from '../../Resourses/logout.svg';
import "./UserTopBar.css"


export default function FeedTopBar(){

    const {user, setUser, setOtherUser} = useContext(AppContext);

    const handleLogOut = async () => {
        await loggedOut();
        setUser({});
    }

    const handleOtherUser = ()=> {
        setOtherUser({})
        sessionStorage.setItem("otherUser", null);
    }

    return(
        <div className="topBar-container" >
            <Link to="/feed" className="username" onClick={handleOtherUser}>
                <img src={back} alt="not img found" />
                <h4>{user.name}</h4>
            </Link>
            <Link to="/" className="logout" onClick={handleLogOut}>
                <h4>Log out</h4>
                <img src={logout} alt="not img found" />
            </Link>
            
        </div>
    )
}