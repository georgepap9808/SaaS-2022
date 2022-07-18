import logo from "../ntua_logo.png";
import './Extend.css';
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';


const Extend = () => {
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [date, setDate] = useState(null);
    const [days, setDays] = useState(27);
    const [daysextention, setDaysextension] = useState(1);
    const refresh = () => {
        window.location.reload();
    }
    const handleextend = () => {
        /*fetch('jfncjdn' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(firstname, lastname, mail, date, daysextention)
        })
        .then(() =>{

        })*/
    }

    return ( 
        <div className="extension">
            <div className="title"><b>"EnergyLive 2022"</b></div>
            <div className="logo"><img src={logo} width="90" height="90" alt="logo of ntua" /></div>
            <br /><br /><br />
            <div className="central">
                <form>
                    <lanel>First name:  </lanel>
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} ></input>
                </form>
                <form>
                    <lanel>Last name:  </lanel>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} ></input>
                </form>
                <form>
                    <lanel>E-mail:  </lanel>
                    <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} ></input>
                </form>
                <form>
                    <lanel>Last Login:  </lanel>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} ></input>
                </form>
                <p>Days left: {days}</p>
                <form>
                    <lanel>Extend by {`(days)`}:  </lanel>
                    <input type="number" value={daysextention} min="1" max="31" onChange={(e) => setDaysextension(e.target.value)} ></input>
                </form>
                <div className="last">
                    <button onclick={handleextend}>Extend</button>
                    <button onClick={refresh}>Cancel</button>
                    <Link to="/home" className="back">Back</Link>
                </div>

            </div>
        </div>
     );
}
 
export default Extend;