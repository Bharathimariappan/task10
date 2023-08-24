import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from './components/Home';
import Content from './components/Content';
import Chennai from './components/Chennai';
import Rameshwaram from './components/Rameshwaram';
import Hogenkkal from './components/Hogenkkal';
import  Madurai from './components/Madurai';
import Kumbakonam from './components/Kumbakonam';
import Ooty from './components/Ooty';
import Kanyakumari from './components/Kanyakumari';
import Kodaikanal from './components/Kodaikanal';
import Yercaud from './components/Yercaud';
import Theni from './components/Theni';
const App = () => {
  return (
    <div>
    <Navbar/>
    <Home />
    <Content/>
    <Chennai />
    <Rameshwaram/>
    <Kodaikanal/>
    <Ooty/>
    <Kanyakumari/>
    <Kumbakonam/>
    <Madurai/>
    <Yercaud/>
    <Theni/>
    <Hogenkkal/>
    </div>
  )
}

export default App
