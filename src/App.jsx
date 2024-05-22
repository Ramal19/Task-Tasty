import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Main from './Section/Main'
import Desserts from './Section/Desserts'
import AddMain from './Pages/AddMain'
import AddDesserts from './Pages/AddDesserts'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} path='/'>
          <Route path='/' element={<Home/>}>
            <Route element={<Main/>} path='/'/>
            <Route element={<Desserts/>} path='/desserts'/>
          </Route>
          <Route element={<AddMain/>} path='/addmain'/>
          <Route element={<AddDesserts/>} path='/adddesserts'/>
        </Route>
      </Routes>
    </>
  )
}

export default App