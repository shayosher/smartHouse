import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddRoom(props) {

    const nav = useNavigate();

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    return (
        <div>
            <select onChange={(e) => { setType(e.target.value) }}>
                <option value="kitchen">kitchen</option>
                <option value="bedroom">bedroom</option>
                <option value="toilet">toilet</option>
            </select>
            <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='name' />
            <input onChange={(e) => { setColor(e.target.value) }} type="text" placeholder='color' />
            <br />
            <button onClick={()=>{props.addNewRoom(type,name,color); nav('/')}}>create room</button>
        </div>
    )
}
