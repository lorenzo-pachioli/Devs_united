import React from 'react';
import CompWelcome from '../Commponents/CompWelcome';
import logoBig from '../Resourses/logoBig.svg';
import "./welcome.css";

export default function Welcome(){
    return (
        <main >
            <div>
                <img src={logoBig} className='logo' alt="img not found" />
            </div>
            
            <div className='menu'>
                <div>
                    <CompWelcome />
                </div>
                <h5>© 2020 Devs_United - BETA</h5>
            </div>
            
            
        </main>
    )
}
