import { useState } from "react"

export default function Counter({ start = 0, step = 1 }) {
  const [count, setCount] = useState(start)
  return (
    <button
      onClick={() => setCount(prev => prev + step)}
    >Count: {count}</button>
  )
}
