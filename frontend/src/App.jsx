import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import Login from './components/Login'
import Signup from './components/Signup'
import UrlForm from './pages/UrlForm'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="bd ">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<UrlForm/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Route>
      </Routes>
      {/* <header className='navbar'>
        <Navbar/>
      </header>
      <Login/>
      
      <UrlForm/>
      
      <main className='h-[80%] flex flex-col gap-4 justify-center items-center'>
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md"
      style={{backgroundColor:"rgba(31,41,55,0.8)"}}
      >
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="url">
          Enter URL
        </label>
        <input
          type="text"
          id="url"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the URL here"
        />
        <button
          onClick={handleShorten}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Shorten
        </button>
      </div>
      <div className={!show?`hidden`:``} >
      <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-md text-center"
      style={{backgroundColor:"rgba(31,41,55,0.8)"}}
      >
        <p className="text-gray-200 text-lg font-medium mb-4">
          Shortened URL: 
          <a 
            href={shortenedUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline ml-1"
          >
            {shortenedUrl}
          </a>
        </p>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
      </main>
      <footer className='mt-auto'>
        <Footer/>
      </footer> */}
    </div>
  )
}

export default App
