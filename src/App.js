import React, { Component } from 'react'
import NavBar from "./components/NavBar/NavBar";
import Card from './components/Card/Card'
import Slides from "./components/Slides/Slides"
import tachyons from "tachyons"
import {Route,Switch} from "react-router-dom"
import MatchDetails from "./components/MatchDeatails/MatchDetails"
import CardList from "./components/CardList/CardList"

export default class App extends Component {

    constructor(){
        super()
        this.state={
            Matches:[]
        }
    }

   async componentWillMount(){
    const data = await fetch("https://cricapi.com/api/matches/pboAl5jFePUG0BnpXZFjB9s6kd32")
    const result = await data.json()
    this.setState({Matches:result.matches})
}

    render() {
        return (
            <div >
               <NavBar/><br></br>
                <marquee direction="right"><h3 style={{color:"white"}}>Welcome to the Harish Cricket Score App !!!!</h3></marquee>
                <Slides/>
                <Switch>
                    <Route exact path="/">
                        <CardList data={this.state.Matches} />
                    </Route>
                    <Route exact path="/details/:id" component={MatchDetails}>
                    </Route>
                </Switch>
            </div>
        )
    }
}
