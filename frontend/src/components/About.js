import './Policy.css';
import { Link } from "react-router-dom";
import logo from "../ntua_logo.png";

const About = () => {
    return ( 
        <div className="policy">
            <div className="logo">
                <img src={logo} width="90" height="90" alt="logo of ntua" />
            </div>
            <div className="text">
                <h2>Our Mission:</h2>
                <p>The one and only purpose of this website , is to inform directly everyone about energy consumption in European countries.<br /><br />Sing in easily to our platform via Google , and get access to everything !!<br /><br /> Ps: Don't forget to extend your registration when you are signed in ! </p>
            </div>
            <div className="link">
                <Link to="/" className="back">{`<-- `}Go back to singin</Link>
            </div>
        </div>
     );
}
 
export default About;
