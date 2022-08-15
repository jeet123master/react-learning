import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = ""
    }
  return (
    <div>
        <h2>Jeet</h2>
        <input 
            type="text"
            placeholder='enter something.....' 
            ref={inputRef}
        />
        <button
            onClick={onClick}
        >
            Change name
        </button>
    </div>
  )
}

export default UseRef