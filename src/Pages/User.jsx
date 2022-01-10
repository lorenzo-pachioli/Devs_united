import { Outlet } from "react-router-dom";
import React from "react";
import "./User.css"
import orancia from "../Resourses/ornacia.png";
import UserTopBar from "../Commponents/User/UserTopBar";


export default function User(){

    const backColor= {
        backgroundColor:"#FFEA5C"
    }

    return(
        <div>
            <UserTopBar />
            <div className="user-title">
                <img src={orancia} alt="img not found" />
                <h1 style={backColor}>username</h1>
            </div>
            

            <div>
                <Outlet />
                
            </div>
            

        </div>
    )
}