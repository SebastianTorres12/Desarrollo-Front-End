import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { Layout } from './components/Layout'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/characters' element={<Characters />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
