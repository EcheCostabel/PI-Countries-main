import React from 'react';
import './App.css';
import Home from '../src/components/Home/Home.jsx';
import LandingPage from '../src/components/landingPage/landingPage.jsx';
import Detail from '../src/components/Details/Detail.jsx';
import ActivityCreate from '../src/components/ActivityCreate/ActivityCreate.jsx';
import ActivitiesList from '../src/components/ActivitiesList/ActivitiesList.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route exact path ='/' component ={LandingPage}/>
            <Route exact path ='/home' component ={Home}/>
            <Route exact path ='/home/:id' component ={Detail}/>
            <Route exact path ='/activity' component ={ActivityCreate}/>
            <Route exact path ='/activities' component = {ActivitiesList}/>
        </Switch>
        {/* <h1>Henry Countries</h1> */}
      </div>
    </BrowserRouter>
  );
}

export default App;