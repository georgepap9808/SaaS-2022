import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return ( 
        <div className="notfound">
            <br />
            <h1>This is NOT a valid url</h1>
            <br />
            <Link to="/home" className="back">Go back to home-page</Link>
            <br /><br />
            <Link to="/" className="back">Go back to sing-in-page</Link>
        </div>
     );
}
 
export default NotFound;