import './App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Singin from './components/Singin';
import Policy from './components/Policy';
import About from './components/About';
import Plans from './components/Plans';
import Homepage1 from './components/Homepage1';
import Extend from './components/Extend';
import NotFound from './components/NotFound';



function App() {
  
  const [token, setToken] = useState('');
  const [user , setUser] = useState({});

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Singin accesstoken={token} setaccessToken={setToken} myuser={user} setMyuser={setUser}/>
          </Route>
          <Route exact path="/home">
            <Homepage1 mymail={user.email} setMyuser={setUser} setaccessToken={setToken}/>
          </Route>
          <Route exact path="/extend">
            <Extend setaccessToken={setToken} myuser={user} setMyuser={setUser}/>
          </Route>
          <Route exact path="/policy">
            <Policy />
          </Route>
          <Route exact path="/about_us">
            <About />
          </Route>
          <Route exact path="/our_plans">
            <Plans />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
