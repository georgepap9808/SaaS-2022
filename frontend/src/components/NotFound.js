import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h3>This is NOT a valid url</h3>
            <Link to="/home">Go back to home-page</Link>
        </div>
     );
}
 
export default NotFound;