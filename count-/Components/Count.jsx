import React, { useState } from 'react'

export default function Count() {

    let [x,setX]=useState(0)
  return (
    <>
    
    <h1>count is:{x}</h1>
    <button onClick={increment}> increment</button>
    <button onClick={decrement}> decrement</button>
    <button onClick={reset}>reset</button>
    
    
    
    </>
  )


  function increment(){
    setX(++x)
  }

  function decrement(){
    setX(--x)
  }

  function reset(){
    setX(0)
  }
}


