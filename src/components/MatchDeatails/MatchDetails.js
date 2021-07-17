import React from 'react'

export default function MatchDetails({matchInfo}) {
    console.log(matchInfo)
    return (
        <div>
            <h2>Match is conducted in the {`${matchInfo.country_name}`} country & the name of the Legaue is {`${matchInfo.league_name}`}</h2>
            <h3>The Home Team of this match is {`${matchInfo.event_home_team}`}</h3>
        </div>
    )
}
