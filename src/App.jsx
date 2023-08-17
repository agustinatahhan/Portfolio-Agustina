// import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './App.css'

function App() {

  return (  
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/" element={<Nav/>}/>
        <Route path="/" element={<Header/>}/>
        <Route path="/" element={<Footer/>}/>
      </Routes>
    </div>
  )
}

export default App
