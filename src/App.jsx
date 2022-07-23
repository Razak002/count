import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
useEffect(()=>
console.log(count))
  return(
    <div>
      <h1>counter app</h1>
    <h2>{count}</h2> 
      <button onClick={()=>setCount(count + 1)}>
        click +
      </button>
    
      <button onClick={()=>setCount(count - 1)}>
        click -
      </button>
      <p>just tap {count} </p>
      <button onClick={()=>setCount(0)}>
        reaset
      </button>
    </div>
  )
}

export default App
