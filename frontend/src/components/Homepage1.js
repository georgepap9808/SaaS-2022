import { Link } from "react-router-dom";
import './Homepage1.css';
import Highcharts from 'highcharts';
import {useEffect, useState, useScript} from 'react';
import logo from "../ntua_logo.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';

const Homepage1 = () => {
    const [account, setAcount] = useState('mymail@gmail.com');
    const other_array = [2322 ,3383 , 29292 , 9999, 9990 , 10000 , 20000 ,17899];    
    const another = [23220 ,33830 , 292920 , 99990, 99900 , 100000 , 200000 ,178990];
    const [date, setDate] = useState(null);
    const [country , setCountry] = useState('');
    const [countryfrom , setCountryfrom] = useState('');
    const [countryto , setCountryto] = useState('');
    const [quantity , setQuantity] = useState(1);
    const [generation , setGeneration] = useState('');
    const [option1 , setOption1] = useState(true);
    const [option2 , setOption2] = useState(false);
    const [option3 , setOption3] = useState(false);
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
            /*if(quantity=="1"){
                fetch('jfncjdn' , {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify([quantity, country])
                })
                .then(() =>{
                    fetch('jfncjdn')
                        .then(data =>{
                            setjsonData(data);
                        })
                })
            }
            if(quantity=="2"){
                fetch('jfncjdn' , {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify([quantity, country, generation])
                })
                .then(() =>{
                    fetch('jfncjdn')
                        .then(data =>{
                            setjsonData(data);
                        })
                })
            }
            if(quantity=="3"){
                fetch('jfncjdn' , {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify([quantity, countryfrom, countryto])
                })
                .then(() =>{
                    fetch('jfncjdn')
                        .then(data =>{
                            setjsonData(data);
                        })
                })
            }*/
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
                            <option value="1">Actual total load</option>
                            <option value="2">Generation per type</option>
                            <option value="3">Cross boarder flows</option>
                        </select>
                    </form>
                </div>
                {quantity=="1" && <p>Country:</p>}
                {quantity=="1" && <div className="country">
                    <form>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="Albania">Albania</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                            <option value="Italy">Italy</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Italy">Italy</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Republic of Moldova">Republic of Moldova</option>
                            <option value="Romania">Romania</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Greece</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Russia">Russia</option>
                        </select>
                    </form>
                </div>}

                {quantity=="2" && <p>Country:</p>}
                {quantity=="2" && <div className="country">
                    <form>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="Albania">Albania</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                            <option value="Italy">Italy</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Italy">Italy</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Republic of Moldova">Republic of Moldova</option>
                            <option value="Romania">Romania</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Greece</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Russia">Russia</option>
                        </select>
                    </form>
                </div>}
                {quantity=="2" && <p>Generation type:</p>}
                {quantity=="2" && <div className="generation">
                    <form>
                        <select value={generation} onChange={(e) => setGeneration(e.target.value)}>
                            <option value="Fossil Brown coal/Lignite">Fossil Brown coal/Lignite</option>
                            <option value="Wind Onshore">Wind Onshore</option>
                            <option value="Fossil Gas">Fossil Gas</option>
                            <option value="Biomass">Biomass</option>
                            <option value="Solar">Solar</option>
                            <option value="Hydro Run-of-river and poundage">Hydro Run-of-river and poundage</option>
                            <option value="Hydro Water Reservoir">Hydro Water Reservoir</option>
                            <option value="Nuclear">Nuclear</option>
                            <option value="GreeFossil Hard coalce">Fossil Hard coal</option>
                            <option value="Other">Other</option>
                            <option value="Fossil Oil">Fossil Oil</option>
                            <option value="Waste">Waste</option>
                            <option value="Geothermal">Geothermal</option>
                            <option value="Other renewable">Other renewable</option>
                            <option value="Wind Offshore">Wind Offshore</option>
                            <option value="Hydro Pumped Storage">Hydro Pumped Storage</option>
                            <option value="Fossil Peat">Fossil Peat</option>
                            <option value="Fossil Coal-derived gas">Fossil Coal-derived gas</option>
                            <option value="Fossil Oil shale">Fossil Oil shale</option>
                            <option value="Marine">Marine</option>
                            
                            
                        </select>
                    </form>
                </div>}

                {quantity=="3" && <p>Country(from)</p>}
                {quantity=="3" && <div className="country">
                    <form>
                        <select value={countryfrom} onChange={(e) => setCountryfrom(e.target.value)}>
                        <option value="Albania">Albania</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                            <option value="Italy">Italy</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Italy">Italy</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Republic of Moldova">Republic of Moldova</option>
                            <option value="Romania">Romania</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Greece</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Russia">Russia</option>
                        </select>
                    </form>
                </div>}
                {quantity=="3" && <p>Country(to)</p>}
                {quantity=="3" && <div className="country">
                    <form>
                        <select value={countryto} onChange={(e) => setCountryto(e.target.value)}>
                        <option value="Albania">Albania</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                            <option value="Italy">Italy</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Greece">Greece</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Italy">Italy</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Republic of Moldova">Republic of Moldova</option>
                            <option value="Romania">Romania</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Greece</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Russia">Russia</option>
                        </select>
                    </form>
                </div>}
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
            <script src="https://code.highcharts.com/modules/exporting.js"></script>
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
