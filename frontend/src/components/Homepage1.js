import { Link } from "react-router-dom";
import './Homepage1.css';
import Highcharts from 'highcharts';
import {useEffect, useState} from 'react';
import logo from "../ntua_logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Homepage1 = () => {
    const [account, setAcount] = useState('mymail@gmail.com');
    const other_array = [2322 ,3383 , 29292 , 9999, 9990 , 10000 , 20000 ,17899];    
    const another = [23220 ,33830 , 292920 , 99990, 99900 , 100000 , 200000 ,178990];
    const [flag, setFlag] = useState(false);
    const [date, setDate] = useState(null);
    const [country , setCountry] = useState('');
    const [quantity , setQuantity] = useState('');
    const [status, setStatus] = useState('Live');
    const [days, setDays] = useState(27);
    const refresh = () => {
        window.location.reload();
    }
    const handleDateSelect = () => {

    }
    const handleDateChange = () => {

    }
    const handleDownloadim = () => {
        
    }
    const handleDownloaddt = () => {

    }
    const handleClick = () => { 
            Highcharts.chart('container', {
                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },
                subtitle: {
                    text: 'Source: thesolafalserfoundation.com'
                },
                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2017'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
                series: [{
                    name: 'Installation',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Project Development',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'Other',
                    data: other_array
                },{
                    name: 'another One',
                    data: another
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            });
    }

    return ( 
        <div className="home1">
            
            <div className="title"><b>"EnergyLive 2022"</b></div>
            <div className="logo"><img src={logo} width="90" height="90" alt="logo of ntua" /></div>
            <br /><br /><br />
            <div className="mail">Authorized with: <b>{account}</b></div>
            
            <br /><br />
            
            <div className="selectors">
                <p>Select Dates:</p>
                <div className="dates">
                    <form>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} ></input>
                    </form>
                </div>
                <p>Quantity:</p>
                <div className="quantity">
                    <form>
                        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                            <option value="Actual total load">Actual total load</option>
                            <option value="Generation per type">Generation per type</option>
                            <option value="Cross boarder flows">Cross boarder flows</option>
                        </select>
                    </form>
                </div>
                <p>Country:</p>
                <div className="country">
                    <form>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="Greece">Greece</option>
                            <option value="Italy">Italy</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Albania">Albania</option>
                        </select>
                    </form>
                </div>
                <button onClick={refresh}>Refresh</button>
            </div>

            <div className="charts">
                <figure className="highcharts-figure">
                    <button className="high" onClick={handleClick}>show chart</button> <br /><br />
                    <div id="container"></div>
                    <p className="highcharts-description">
                        Basic line chart showing trends in a dataset. This chart includes the 
                        <code> series-label</code> module, which adds a label to each line for
                        enhanced readability. 
                    </p>
                </figure>
                <Link to="/" className="logout">Logout</Link>
            </div>

            <div className="update">
                <p>Latest update: 08/04/2022 20:35</p>
            </div>
            <button className="downloadim" onclick={handleDownloadim}>Download image</button>
            <button className="downloaddt" onclick={handleDownloaddt}>Download data</button>

            <div className="line">
                <hr />
            </div>

            <div className="last">
                <span>Service status: {status}</span>
                <span>Days left: {days}</span>
                <span><Link to="/extend" className="lastlink1">Extend plans</Link> </span>
                <span><Link to="/about_us" className="lastlink2">About</Link> </span>
            </div>
            
        </div>
     );
}
 
export default Homepage1
