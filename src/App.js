import React from "react";
import { Route, Routes } from "react-router-dom";
import Covid from './components/Covid';
import Statewise from "./components/StateWiseData/Statewise";
import Navbar from "./components/Navbar";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  return (
    <>
    {/* <h1>hii</h1> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Covid/>} exact/>
      <Route path="/state" element ={<Statewise/>} exact/>
      </Routes>
    {/* <Covid /> */}
    {/* <Statewise /> */}
    </>
  );
}

export default App;
