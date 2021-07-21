import React, { Component } from 'react'
import NavBar from "./components/NavBar/NavBar";
import Card from './components/Card/Card'
import Slides from "./components/Slides/Slides"
import tachyons from "tachyons"

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
    console.log(result)
}

    render() {
        return (
            <div >
               <NavBar/><br></br>
                <marquee direction="right"><h3 style={{color:"white"}}>Welcome to the Harish Cricket Score App !!!!</h3></marquee>
                <Slides/>
                {this.state.Matches.map(item =>{
                  return <Card key={item.unique_id} match={item} />
                })}
            </div>
        )
    }
}
