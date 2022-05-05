import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Slice/AppSlice'

export default function CounterB() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
     
      <div style={{textAlign:"center",margin:"0px auto",marginTop:"30px"}}>
      <h1>Component B</h1>
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