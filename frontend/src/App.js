import './App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Singin from './components/Singin';
import Homepage1 from './components/Homepage1';
import Homepage2 from './components/Homepage2';
import Homepage3 from './components/Homepage3';
import Extend from './components/Extend';
import NotFound from './components/NotFound';


function App() {

  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Singin />
          </Route>
          <Route exact path="/home">
            <Homepage1 />
          </Route>
          <Route exact path="/home/ActualTotalLoad">
            <Homepage1 />
          </Route>
          <Route exact path="/home/CrossBoarderFlows">
            <Homepage2 />
          </Route>
          <Route exact path="/home/GenerationPerType">
            <Homepage3 />
          </Route>
          <Route exact path="/extend">
            <Extend />
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
