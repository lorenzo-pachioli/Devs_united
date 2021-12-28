import { Outlet, Route, Routes } from "react-router-dom";
import React from "react";
import orancia from "../Resourses/ornacia.png";
import UserTopBar from "../Commponents/User/UserTopBar";
import UserPost from "../Commponents/User/UserPost";
import UserFavorites from "../Commponents/User/UserFavorites";

export default function User(){
    return(
        <div>
            <UserTopBar />
            <img src={orancia} alt="img not found" />

            <div>
                <Outlet />
                
            </div>
            

        </div>
    )
}