import React from 'react'
import Card from "../Card/Card"

export default function CardList({data}) {
    return (
        <div>
            {data.map(item =>{
                  return <Card key={item.unique_id} match={item} />
                })}
        </div>
    )
}
