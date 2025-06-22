import { useState } from 'react'
import OtpInputs from './Components/OtpInputs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OtpInputs/>
    </>
  )
}

export default App
