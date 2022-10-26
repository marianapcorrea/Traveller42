import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import Body from './Layout'



function App() {
 return (
    <Router>
        <Body>
            <Switch>
                <Route exact path= '/' component={HomePage}/>
                <Route exact path= '/resume' component={ResumePage}/>
            </Switch>
        </Body>
    </Router>
 )
}

export default App
