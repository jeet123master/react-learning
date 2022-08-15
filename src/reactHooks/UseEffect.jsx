import React, { useState,useEffect } from 'react'
import Axios from 'axios'

const UseEffect = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        Axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[3].name)
            })
    }, [])
  return (
    <div>
        UseEffect {data}
    </div>
  )
}

export default UseEffect