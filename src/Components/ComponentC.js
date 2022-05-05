import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Slice/AppSlice'


//to ask? why we do . counter after state to access value, which counter is this "counter name"


export default function CounterC() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
     
      <div style={{textAlign:"center",margin:"0px auto",marginTop:"30px"}}>
      <h1>Component C</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{margin:"0px 30px"}}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}