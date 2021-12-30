import React from 'react';
import CompLoggedOut from '../Commponents/CompLoggedOut';
import logoBig from '../Resourses/logoBig.svg';

export default function LoggedOut(){
    return (
        <div display="flex" flex-direction="row">
            <img src={logoBig} alt="img not found" />
            <div>
                <CompLoggedOut />
            </div>
            <h5>© 2020 Devs_United - BETA</h5>
            
        </div>
    )
}