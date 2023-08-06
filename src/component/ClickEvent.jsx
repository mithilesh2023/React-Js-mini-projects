import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
const ClickEvent = () => {
  const[count,setCount]=useState(0)
    function plus(){
      setCount(count+1)
    }
    function minus(){
      if(count==0){
        setCount(count)
      }
      else{
        setCount(count-1)
      }
    }
  return (
    <div style={{display:'flex', textAlign:'center',alignItems:"center",justifyContent:"center"}}>
   <button onClick={minus} style={{width:'40px', height:'30px',marginRight:'10px'}}><AiOutlineMinus style={{fontSize:'25px',}}/></button>
      <h2>{count}</h2>
   <button onClick={plus} style={{width:'40px', height:'30px',marginLeft:'10px'}}><BsPlusLg style={{fontSize:'25px',}}/></button>
    </div>
  )
}

export default ClickEvent