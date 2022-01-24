import { Link } from "react-router-dom";
import React, {useContext} from 'react';
import "./compWelcome.css";
import { AppContext } from '../Hooks/AppContext';

export default function CompWelcome(){
    const {user} = useContext(AppContext);

    return(
        <div className="container-welcome">
            <h1>Welcome</h1>
            <h1 className="red-text">{user ? (user.name) : ("to Devs-united")}</h1>
            <input type="text" className="input" placeholder="Type your username" />
            <h4>Select your color:</h4>
            <ul className="colours">
                <li className="square red" />
                <li className="square orange"/>
                <li className="square yellow"/>
                <li className="square green"/>
                <li className="square blue"/>
                <li className="square purple"/>
            </ul>
            <Link to="/feed" className="continue">Continue</Link>
        </div>
    )
}