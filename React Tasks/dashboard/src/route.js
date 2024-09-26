import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Room from './pages/Room';
import Settings from './pages/Settings';
import Social from './pages/Social';

export default function AppRoute(){
    return(
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/explore" component={Explore} />
            <Route path="/social" component={Social} />
            <Route path="/room" component={Room} />
            <Route path="/settings" component={Settings} />
        </Switch>
    );
}