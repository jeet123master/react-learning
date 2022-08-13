import React, { useState } from 'react'

function UseState() {
    const [details, setDetails] = useState({counter: 0, name: ""});

    function increaseCounter(){
      setDetails((prev) => ({
        ...prev,
        counter: prev.counter + 1,
      }))
    }
    
    return (
      <div>
        <input type="text" onChange={e => e.target.value} />
         <h1>
            {details.name} has counter: {details.counter} times!
          </h1>
         <button onClick={increaseCounter}>Click</button>
      </div>
    );
}

export default UseState