import React,{useState} from 'react'
import './style.css'
import tachyons from "tachyons"
import MatchDetails from '../MatchDeatails/MatchDetails'

const clickFnc = (matchInfo)=>{
//    return <MatchDetails matchInfo={match}/>
    console.log(matchInfo)
    return (
        <div>
            {console.log("Hi") }
            <h2>Match is conducted in the {`${matchInfo.country_name}`} country and the name of the Legaue is {`${matchInfo.league_name}`}</h2>
            <h3>The Home Team of this match is {`${matchInfo.event_home_team}`}</h3>
        </div>
)
}


export default function Card({match}) {
    return (
        <div>
            <div className="bg-light-green br2 pa3 ma2 bw2 shadow-6 tc">
                        <h6 className="tc">Match Start time :- {`${match.event_time} ${match.event_date_start}`}</h6>
                    <div class="flex">
                    <div>
                            <img src={match.event_home_team_logo}/>
                            <h5>{match.event_home_team}</h5>
                            <h6>{match.event_home_final_result}</h6>
                        </div>
                    <div>
                        <h3> Vs </h3>
                    </div>
                        <div>
                            <img src={match.event_away_team_logo}/>
                            <h5>{match.event_away_team}</h5>
                            <h6>{match.event_away_final_result}</h6>
                        </div>
                    </div>
                    <h6 className="tc">{match.event_status_info}</h6>
                    <button className="bg-light-blue"  onClick={()=>{
                        clickFnc(match)
                    }}>Learn More Details ....</button>
                </div>
        </div>
    )
}
