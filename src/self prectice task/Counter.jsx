import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Counter() {

    const[number , setNumber] = useState(0);

    const increment = () => {
        if(number<10){
            setNumber(number+1)
        }else{
            console.log('reach to the increment level');
            alert('reach to the increment level')
        }
    }

    const decrement = () => {
        if(number>0){
            setNumber(number-1)
        }else{
            console.log('reach to the decrement level');
            alert('reach to the decrement level')
        }

    }

  return (
    <div className='container'>
        <h1>Counter App</h1>

        <button onClick={decrement}> - </button>
        <label htmlFor="" style={{height:"5px", width:"10px", marginLeft:"10px", marginRight:"10px", textAlign:'center'}}> {number} </label>
        <button onClick={increment} > + </button>
    </div>
  )
}

export default Counter