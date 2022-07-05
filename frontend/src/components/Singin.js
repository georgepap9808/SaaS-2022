import './Singin.css';
import { Link } from "react-router-dom";

const Singin = () => {
    return ( 
        <div className="main">
            <div className="image">
                <img src="https://www.shell.com/business-customers/lubricants-for-business/products/wind-power/_jcr_content/pagePromo/image.img.960.jpeg/1527166714706/turbines-on-horizon.jpeg" width="300" height="250" alt="Wind Power Turbines on horizon" />
            </div>
            <div className="title">
                <h1>EnergyLive 2022</h1>
            </div>
            <div className="Google">
                <Link to="/home">Sing in with Google</Link>
            </div>
        </div>
     );
}
 
export default Singin;