import React from 'react';
import CompLoggedOut from '../Commponents/CompLoggedOut';
import logoBig from '../Resourses/logoBig.svg';
import "./LoggedOut.css";

export default function LoggedOut(){
    return (
        <main>
            <div className='img-out'>
                <img src={logoBig} alt="img not found" />
            </div>
            
            <div className='menu'>
                <CompLoggedOut />
                <h5>© 2020 Devs_United - <span className='beta'>BETA</span> </h5>
            </div>
        </main>
    )
}