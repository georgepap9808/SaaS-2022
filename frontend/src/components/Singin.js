import './Singin.css';
import logo from "../ntua_logo.png";
import google_logo from "../google_logo.png"
import thunder2 from "../thunder2.gif";
import { Link , useHistory } from "react-router-dom";
import {useEffect, useState, useScript} from 'react';
import {GoogleLogin} from 'react-google-login';
import {Button} from '@material-ui/core';
import useStyles from './styles';
import jwt_decode from 'jwt-decode';


const Singin = (props) => {

    const token=props.accesstoken;
    const setToken=props.setaccessToken;
    const user=props.myuser;
    const setUser=props.setMyuser;
    const [responseData , setResponseData] = useState(null);

    function handleCallbackResponse(response) {
        console.log("mytoken:\n" + response.credential);
        console.log('response object:\n');
        console.log(response);
        const userToken = response.credential;
        setToken(userToken);
        //const userObj = jwt_decode(response.credential)
        //setUser(userObj);
        console.log(jwt_decode(response.credential));
        fetch(`http://127.0.0.1:5000/api/user/login?token=${userToken}` , {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            //body: JSON.stringify({token})
        })
        .then(res => {
            if(!res.ok) {throw Error('error message ...');}
            return res.json();
        })
        .then (data => {
            setResponseData(data);
        })
        .catch (err => {
            console.log(err.message);
            console.log(err);
        })
        //history.push("/home");
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '17938773328-m47sm7ugmi49jsa5an61b3cbci2ugiih.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: 'outline' , size: 'large'}
        );

    }, []);

    const classes = useStyles();
    const history = useHistory();
    //const [token, setToken] = useState('');
    const [data , setData] = useState([]);
    const [mail , setMail] = useState('m@gmail.com');
    const [error , setError] = useState('');

    const handleLogin = () => {
        /*fetch('/api/user/login' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(token)
        })
        .then(() =>{
            fetch('http://localhost:3000//api/user/login')
                .then(res => {
                    if(!res.ok) {throw Error('error message!!!!');}
                    return res.json();
                })
                .then(data =>{
                    setData(data);
                    setMail(data[1]);
                })
                .catch(err => {
                    setError(err.message)
                });
        });*/
        history.push("/home");
    };

    /*const googleSuccess = async (res) => {
        console.log(res);
        console.log('yupiiiiii');

        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            
        }
        catch(error){
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('unsuccessfull sign-in');
    };*/

    

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
            {/*<GoogleLogin
                clientId='17938773328-m47sm7ugmi49jsa5an61b3cbci2ugiih.apps.googleusercontent.com'
                render={(renderProps) => (
                    <Button 
                        className = "googlesignin"
                        color="primary"
                        fullWidth
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        startIcon={null}
                        variant="contained"
                        >
                          <img src={google_logo} width="21" height="21" alt="logo of google" />&nbsp;&nbsp;Google Sing In  
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
                scope="profile"
                />*/}
            <div id="signInDiv"></div>
            <div className="Google">
                <button onClick={handleLogin} className="words"><img src={google_logo} width="21" height="21" alt="logo of google" />&nbsp;&nbsp;Continue with Google</button>
            </div>
            {user && <b>{user.email}</b>}<br />
            {token && <b>{token}</b>}
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