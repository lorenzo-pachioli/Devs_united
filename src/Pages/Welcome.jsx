import React from 'react';
import CompWelcome from '../Commponents/CompWelcome';
import logoBig from '../Resourses/logoBig.svg';

export default function Welcome(){
    return (
        <div display="flex">
            <img src={logoBig} alt="img not found" />
            <div>
                <CompWelcome />
            </div>
            <h5>© 2020 Devs_United - BETA</h5>
            
        </div>
    )
}
