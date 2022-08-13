import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);

    //useEffect without dependencies
    // useEffect(() => {
    //     document.title = `${count} new message!`
    // })

    //useEffect with empty array
    // useEffect(() => {
    //     document.title = `${count} new message!`
    // }, [])

    //useEffect with variables
    const [otherCount, setOtherCount] = useState(5)
    useEffect(() => {
        document.title = `${otherCount} new message!`
    }, [otherCount])

  return (
    <div>
        <h3>{count} new message!</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <h3>Other count: {otherCount}</h3>
        <button onClick={()=> setOtherCount(otherCount+5)}>Increased by 5</button>
    </div>
  )
}

export default UseEffect