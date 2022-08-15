import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("Jeet")

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleChange = (e) => {
        const val = e.target.value;
        setInputValue(val)
    }
  return (
    <div>
        {/* example one */}
        <h1>UseState</h1>
        <h2>Count: {count}</h2>
        <button
            onClick={handleIncrease}
        >
            Increase
        </button><br /><br />

        <input 
            type="text"
            placeholder='write something....'
            onChange={handleChange}
        />
        <h3>{inputValue}</h3>
    </div>
  )
}

export default UseState