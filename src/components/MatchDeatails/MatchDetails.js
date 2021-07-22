import React,{useState} from 'react'
import tachyons from "tachyons"
export default function MatchDetails(props) {
    const api = fetch("https://cricapi.com/api/matches/pboAl5jFePUG0BnpXZFjB9s6kd32").then(res=>res.json()).then(data=>console.log(data.matches))
    console.log(props.match.params)
    return (
        <div>
            <h1 className="tc" style={{color:"white"}}>Hello I'm from India</h1>
        </div>
    )
}
