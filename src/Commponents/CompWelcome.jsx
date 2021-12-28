import { Link } from "react-router-dom";
import rectangleBlue from '../Resourses/RectangleBlue.svg';
import rectangleYellow from '../Resourses/RectangleYellow.svg';
import rectangleRed from '../Resourses/RectangleRed.svg';
import rectangleGreen from '../Resourses/RectangleGreen.svg';
import rectangleOrange from '../Resourses/RectangleOrange.svg';
import rectanglePurple from '../Resourses/RectanglePurple.svg';

export default function CompWelcome(){
    return(
        <div>
            <h1>Welcome</h1>
            <input type="text" placeholder="Type your username" />
            <h4>Select your color:</h4>
            <div>
                <img src={rectangleRed} width="10px" higth="10px" alt="img not found" />
                <img src={rectangleOrange} width="10px" higth="10px" alt="img not found" />
                <img src={rectangleYellow} width="10px" higth="10px" alt="img not found" />
                <img src={rectangleGreen} width="10px" higth="10px" alt="img not found" />
                <img src={rectangleBlue} width="10px" higth="10px" alt="img not found" />
                <img src={rectanglePurple} width="10px" higth="10px" alt="img not found" />
            </div>
            <Link to="/feed">Continue</Link>
        </div>
    )
}