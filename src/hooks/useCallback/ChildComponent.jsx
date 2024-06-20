import React, { useEffect } from 'react'

export const ChildComponent = React.memo(({onClick}) => {

    useEffect(()=>{
        console.log('api Call');
    }, [])

  return (
    <button onClick={onClick}>Increment</button>
  )
})
