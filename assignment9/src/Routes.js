import React,{Component} from "react";
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";
import Jobs from "./Jobs";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import "./index.css"

class Routes extends Component{
    render(){
        const RestrictedRoutes = () => {
            return (
                <div>
                    <ul className="header">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/jobs">Jobs</NavLink></li>
                    </ul>
                <div id="container">
                        <Switch>
                        <Route path = '/home' component = {Home} />
                            <Route path = '/contact' component = {Contact} />
                            <Route path = '/profile' component = {Profile} />
                            <Route path = '/about' component = {About} />
                            <Route path = '/jobs' component = {Jobs} />
                    </Switch>
                </div>
               </div>
            )
        }
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path = '/' component = {Login}/>
                        <Route component = {RestrictedRoutes}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;