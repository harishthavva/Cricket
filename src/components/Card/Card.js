import React,{useState} from 'react'
import './style.css'
import tachyons from "tachyons"
import MatchDetails from '../MatchDeatails/MatchDetails'
import {Link} from "react-router-dom"

export default function Card({match}) {
    return (
        <div>
            <div className="bg-light-green br2 pa3 ma2 bw2 shadow-6 tc">
                        <h6 className="tc">Match Start time :- {`${new Date(match.dateTimeGMT).toLocaleString()}`}</h6>
                    <div class="flex">
                    <div>
                            <h5 style={{marginRight:"20px"}}>{match["team-1"]} </h5>
                        </div>
                    <div>
            
                    <img src="https://img.icons8.com/plumpy/24/000000/resize-horizontal.png"/>
                    </div>
                        <div>
                            <h5 style={{marginLeft:"20px"}}> {match["team-2"]}</h5>
                        </div>
                    </div>
                  {match.matchStarted ? typeof match.winner_team =="undefined" ? <h6 className="tc">Sorry, Scores are not updated !!!!</h6> :  <h6 className="tc">Match winner :- <span><h5>{`${match.winner_team}`}</h5></span> </h6> : <h6 className="tc"> Match has not yet started !!!!</h6> }
                <Link to={`/details/${match.unique_id}`}><button>Learn More Details ...</button></Link>
                </div>
        </div>
    )
}
