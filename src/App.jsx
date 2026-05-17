
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop'

function App() {
 

  return (
  <>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  </>
  )
}

export default App
