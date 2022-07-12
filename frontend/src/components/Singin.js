import './Singin.css';
import logo from "../ntua_logo.png";
import google_logo from "../google_logo.png"
import thunder2 from "../thunder2.gif";
import { Link } from "react-router-dom";

const Singin = () => {
    return ( 
        <div className="singin">
            <div className="ntua_logo">
                <img src={logo} width="90" height="90" alt="logo of ntua" />
            </div>
            <div className="image">
                <img src="https://www.shell.com/business-customers/lubricants-for-business/products/wind-power/_jcr_content/pagePromo/image.img.960.jpeg/1527166714706/turbines-on-horizon.jpeg" width="300" height="250" alt="Wind Power Turbines on horizon" />
            </div>
            <div className="title">
                <b>"EnergyLive 2022"</b>
            </div>
            <div className="thunder">
                <img src={thunder2} width="55" height="55" alt="thunder gif" />
            </div>
            <div className="Google">
                <Link to="/home" className="words"><img src={google_logo} width="21" height="20" alt="logo of google" />&nbsp;&nbsp;Continue with Google</Link>
            </div>
            <div className="line">
                <hr />
            </div>
            <div className="last">
                <span><Link to="/about_us" className="legal">About</Link></span>
                <span><Link to="/our_plans" className="legal">Plans</Link></span>
                <span><Link to="/policy" className="legal">Legal</Link></span>
            </div>
        </div>
     );
}
 
export default Singin;