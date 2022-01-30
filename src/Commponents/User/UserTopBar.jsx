import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import { loggedOut } from "../../Services/autentication";
import { AppContext } from '../../Hooks/AppContext';
import "./UserTopBar.css"


export default function FeedTopBar(){

    const { setUser} = useContext(AppContext);

    const handleLogOut = async () => {
        await loggedOut();
        setUser(null);
    }

    return(
        <div className="topBar-container" >
            <Link to="/feed" className="username">
                <h4>username</h4>
            </Link>
            <Link to="/" className="logout" onClick={handleLogOut}>
                <h4>Log out</h4>
            </Link>
            
        </div>
    )
}