// import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './App.css'
import Contact from "./Components/Contact/Contact";

function App() {

  return (  
    <div>
        <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/" element={<Header/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
        <Footer/>
    </div>
  )
}

export default App
