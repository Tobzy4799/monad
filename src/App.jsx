
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Task from './pages/Task'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route index element={<Task/>}/>
         <Route path='/home' element={<Task/>} />
      </Routes>
    </>
  )
}

export default App
