import React, { useState } from 'react'
import AddProduct from './AddProduct';

export default function Room(props) {

    const [flag, setFlag] = useState(false);

    const show = () => {
        if (flag) {
            return <div> <AddProduct index={props.index} addProduct={props.addProduct} /> </div>
        }
        else {
            return <div><button onClick={change}>add product</button></div>
        }
    }

    const change = () => {
        setFlag(!flag)
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.type}</h3>
            {show()}
            {props.products.map((val, index) => {
            // let condition = val.condition ? 'green' : 'red'
            let condition = val.condition;
            if(val.condition==false){
                condition='red';
            }
            else{
                condition='green'
            }
            return (
                 <button style={{backgroundColor:condition}} onClick={()=>{props.changeCondition(props.index,index)}}>{val.type}</button>  
            )
            })}
        </div >
    )
}
