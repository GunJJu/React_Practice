import { useState } from 'react'
import './App.css'

import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Section />
    </div>
  )
}

export default App
