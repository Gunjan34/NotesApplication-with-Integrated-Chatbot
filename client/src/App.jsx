import React from 'react'
import Signup from './pages/Signup'
import {BrowserRouter , Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import {ToastContainer} from "react-toastify"
import Chatbot from './pages/Chatbot';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/chatbot' element={<Chatbot/>}/>
     </Routes>
     <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
