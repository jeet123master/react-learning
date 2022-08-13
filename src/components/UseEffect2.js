import React, { useState, useEffect } from 'react'

function UseEffect2() {

    const [time, setTime] = useState(0);

    useEffect (() => {
        const timer = setInterval(()=> {
            setTime(time + 1);
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    })

  return (
    <div>
        <h3>{time} in seconds</h3>
    </div>
  )
}

export default UseEffect2