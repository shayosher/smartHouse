import React from 'react'
import { Link } from 'react-router-dom'

export default function Rooms(props) {

    return (
        <div>
            {props.rooms.map((val) => {
                return <Link to={`/room${val.name}`}><button style={{ backgroundColor: val.color }}>{val.name}</button></Link>
            })}
            <Link to={'/addRoom'}><button>+</button></Link>
        </div>
    )
}
