import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardApp from "./Pages/DashboardApp"
import MonthlyBreakdown from "./Pages/MonthlyBreakdown"
import NotFound404 from "./Pages/NotFound404"
import SystemDetails from "./Pages/SystemDetails"

const routes = (
    <BrowserRouter>
        <Switch>
            <Route  path="/" component={DashboardApp} exact={true} />
            <Route  path="/months" component={MonthlyBreakdown} />
            <Route  path="/SystemDetails" component={SystemDetails} />
            <Route component={NotFound404} />

            
        </Switch>
    </BrowserRouter>
);
// <App />
ReactDOM.render(routes, document.getElementById('root'));
// registerServiceWorker();
