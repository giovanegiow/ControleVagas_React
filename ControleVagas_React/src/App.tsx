//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './views/Login'
import { Cadastrar } from './views/Cadastrar'
import { MenuPrincipal } from './views/MenuPrincipal'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Cadastrar' element={<Cadastrar />}></Route>
          <Route path='/MenuPrincipal' element={<MenuPrincipal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
