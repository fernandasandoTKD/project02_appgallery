import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Taekwondo1 } from './components/Taekwondo1'
import { Taekwondo2 } from './components/Taekwondo2'
import { Taekwondo3 } from './components/Taekwondo3'
import { Taekwondo4 } from './components/Taekwondo4'
import { Taekwondo5 } from './components/Taekwondo5'
import { Taekwondo6 } from './components/Taekwondo6'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <Taekwondo1></Taekwondo1>
     <Taekwondo2></Taekwondo2>
     <Taekwondo3/>
     <Taekwondo4/>
     <Taekwondo5></Taekwondo5>
     <Taekwondo6></Taekwondo6>
    </>
  )
}

export default App
