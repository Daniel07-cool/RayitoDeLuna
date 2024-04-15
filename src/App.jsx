import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <ItemListContainer mensaje={"ENVIOS GRATIS a cada $1000 en compra"}/>
    </>
  )
}

export default App
