import { Outlet } from "react-router-dom";
import React, {useContext} from "react";
import "./User.css";
import UserTopBar from "../Commponents/User/UserTopBar";
import { AppContext } from '../Hooks/AppContext';


export default function User(){

    const {user} = useContext(AppContext);

    const backColor= {
        backgroundColor:`${user.color}`
    }
    let borderUser = {
        border: `2px solid ${user.color}`
    }

    return(
        <div className="user-container">
            <UserTopBar />
            <div className="user-title">
                <img src={`${user.photo}`} style={borderUser} alt="img not found" />
                <h1 style={backColor}>{`${user.name}`}</h1>
            </div>
            

            <div>
                <Outlet />
                
            </div>
            

        </div>
    )
}