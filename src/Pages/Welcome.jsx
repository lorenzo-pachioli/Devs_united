import React from 'react';
import CompWelcome from '../Commponents/CompWelcome';
import {LogoBig} from '../Resourses/logo big.svg';

export default function Welcome(){
    return (
        <div>
            <img src={LogoBig} alt="img not found" />
            <div>
                <CompWelcome />
            </div>
            <h5>© 2020 Devs_United - BETA</h5>
            
        </div>
    )
}
