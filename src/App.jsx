import './App.css'
import { Navigation } from './components/Navigation'
import { Taekwondo1 } from './components/Taekwondo1'
import { Taekwondo2 } from './components/Taekwondo2'
import { Taekwondo3 } from './components/Taekwondo3'
import { Taekwondo4 } from './components/Taekwondo4'
import { Taekwondo5 } from './components/Taekwondo5'
import { Taekwondo6 } from './components/Taekwondo6'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/taekwondo1" element= {<Taekwondo1/>}/>
        <Route path="/taekwondo2" element= {<Taekwondo2/>}/>
        <Route path="/taekwondo3" element= {<Taekwondo3/>}/>
        <Route path="/taekwondo4" element= {<Taekwondo4/>}/>
        <Route path="/taekwondo5" element= {<Taekwondo5/>}/>
        <Route path="/taekwondo6" element= {<Taekwondo6/>}/>
      </Routes>
      <Navigation/>
    </BrowserRouter>
    
    </>
  )
}

export default App
