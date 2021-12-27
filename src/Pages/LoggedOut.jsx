import React from 'react';
import CompLoggedOut from '../Commponents/CompLoggedOut';
import {LogoBig} from '../Resourses/logo big.svg';

export default function Welcome(){
    return (
        <div>
            <img src={LogoBig} alt="img not found" />
            <div>
                <CompLoggedOut />
            </div>
            <h5>© 2020 Devs_United - BETA</h5>
            
        </div>
    )
}