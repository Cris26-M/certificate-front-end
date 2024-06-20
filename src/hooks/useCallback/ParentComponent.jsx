import React, { useCallback, useState } from 'react'
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {

    const [count, setCount] = useState(0);

const handleClick = useCallback(()=>{
setCount((prevState) => prevState + 1)
// setCount(count + 1)
    }, [])

    // const handleClick = () => {
    //     setCount(count + 1)
    // }

  return (
    <div>
        <p>Count : {count}</p>
        <ChildComponent onClick={handleClick}/>  
    </div>
  )
}
