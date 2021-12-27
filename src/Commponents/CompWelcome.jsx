import { Link } from "react-router-dom";
import {RectangleBlue} from '../Resourses/RectangleBlue.svg';
import {RectangleYellow} from '../Resourses/RectangleYellow.svg';
import {RectangleRed} from '../Resourses/RectangleRed.svg';
import {RectangleGreen} from '../Resourses/RectangleGreen.svg';
import {RectangleOrange} from '../Resourses/RectangleOrange.svg';
import {RectanglePurple} from '../Resourses/RectanglePurple.svg';

export default function CompWelcome(){
    return(
        <div>
            <h1>Welcome</h1>
            <input type="text" placeholder="Type your username" />
            <h4>Select your color:</h4>
            <div>
                <img src={RectangleRed} width="10px" higth="10px" alt="img not found" />
                <img src={RectangleOrange} width="10px" higth="10px" alt="img not found" />
                <img src={RectangleYellow} width="10px" higth="10px" alt="img not found" />
                <img src={RectangleGreen} width="10px" higth="10px" alt="img not found" />
                <img src={RectangleBlue} width="10px" higth="10px" alt="img not found" />
                <img src={RectanglePurple} width="10px" higth="10px" alt="img not found" />
            </div>
            <Link to="/feed">Continue</Link>
        </div>
    )
}