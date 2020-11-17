import React from 'react';
import 'react-router-dom';
import Routes from './routes';
import Navbar from './Navbar';
import './Main.css';


export default function App() {

    return(
      <div className="landingBody">
      <Navbar/>
      <Routes/>
      </div>
    );
  
  }
    