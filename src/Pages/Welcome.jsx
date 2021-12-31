import React from 'react';
import CompWelcome from '../Commponents/CompWelcome';
import logoBig from '../Resourses/logoBig.svg';
import "./welcome.css";

export default function Welcome(){
    return (
        <main >
            <div className='img-welcome'>
                <img src={logoBig} className='logo' alt="img not found" />
            </div>
            
            <div className='menu'>
                
                <CompWelcome />
                
                <h5>© 2020 Devs_United - <span className='beta'>BETA</span> </h5>
            </div>
            
            
        </main>
    )
}
