import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Main from './Section/Main'
import Desserts from './Section/Desserts'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} path='/'>
          <Route index element={<Home/>}></Route>
          <Route element={<Main/>} path='/'/>
          <Route element={<Desserts/>} path='/desserts'/>
          <Route element={<Add/>} path='/add'/>
        </Route>
      </Routes>
    </>
  )
}

export default App