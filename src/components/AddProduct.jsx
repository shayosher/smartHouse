import React,{useState} from 'react'

export default function AddProduct(props) {

    const [product,setProduct]=useState('lamp');

  return (
    <div>
        <select onChange={(e)=>{setProduct(e.target.value)}}>
            <option value="lemp">lemp</option>
            <option value="stereo">stereo</option>
            <option value="air_conditioner">air_conditioner</option>
        </select>
        <button onClick={()=>{props.addProduct(props.index,product)}}>add product</button>
    </div>
  )
}
