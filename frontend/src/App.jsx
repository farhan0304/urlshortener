import { useState,useEffect } from 'react'
import './App.css'
import Layout from './pages/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import UrlForm from './pages/UrlForm'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [status,setStatus] = useState(false);
  const isLoggedin = async ()=>{
    try{
      
      const data = await fetch("/user/isSession");
      const response = await data.json();
      if (response.islogin){
        setStatus(true);
      }else{
        setStatus(false)
      }
    }
    catch(err){
      console.log("Not able to check Session")
      setStatus(false)
    }
  }
  
  useEffect(() =>{

    isLoggedin();
    
  },[])

  return (
    <div className="bd ">
      <Routes>
        <Route path='/' element={<Layout status={status} setStatus={setStatus}/>}>
          <Route index element={<UrlForm/>} />
          <Route path='/login' element={<Login setStatus={setStatus}/>} />
          <Route path='/signup' element={<Signup setStatus={setStatus}/>} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
