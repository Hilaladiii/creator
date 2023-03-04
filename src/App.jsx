import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import Layout from './Background/Layout';
import {BrowserRouter, Route, Router, Routes, Switch} from 'react-router-dom';


//pages
import Home from './Form/Home/Home';
import Login from './Form/Login/Login';
import Signup from './Form/Signup/Signup';
import Verification from './Form/Verification/Verification';

function App() {
  return (
    <div className='App'>
      {
      <BrowserRouter>
      <Routes>             
          <Route path='/' element={<Home />}/> 
          <Route path="/login" element={<Login/>}/>                    
          <Route path="/signup" element={<Signup/>}/>          
          <Route path="/verification" element={<Verification/>}/>                                               
      </Routes>            
      </BrowserRouter>
      
      }

    </div>
    
  );
}

export default App;
