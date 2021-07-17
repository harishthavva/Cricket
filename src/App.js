import React, { Component } from 'react'
import NavBar from "./components/NavBar/NavBar";
import Card from './components/Card/Card'
import tachyons from "tachyons"

export default class App extends Component {

    constructor(){
        super()
        this.state={
            Matches:[{}]
        }
    }

   async componentDidMount(){
    const data = await fetch("https://api.api-cricket.com/?method=get_livescore&APIkey=7486d0c933de61490887d2e9908b86b35638c54c40750cbed67823a533772c40")
    const result = await data.json()
    this.setState({Matches:result.result})
    console.log(result.result)
}

    render() {
        return (
            <div >
               <NavBar/><br></br>
                <marquee direction="right"><h3>Welcome to the Harish Cricket Score App !!!!</h3></marquee>
                {
                    this.state.Matches.map(item =>{
                        return <Card match={item}/>
                    })
                }
            </div>
        )
    }
}
