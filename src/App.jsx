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
    <div>
      <h1 id="title" className='text-center my-3'>Proyecto galería</h1>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/taekwondo1" element= {<Taekwondo1 className="image-size"/>}/>
        <Route path="/taekwondo2" element= {<Taekwondo2 className="image-size"/>}/>
        <Route path="/taekwondo3" element= {<Taekwondo3 className="image-size"/>}/>
        <Route path="/taekwondo4" element= {<Taekwondo4 className="image-size"/>}/>
        <Route path="/taekwondo5" element= {<Taekwondo5 className="image-size"/>}/>
        <Route path="/taekwondo6" element= {<Taekwondo6 className="image-size"/>}/>
      </Routes>
      <Navigation/>
    </BrowserRouter>
    
    </>
  )
}

export default App
