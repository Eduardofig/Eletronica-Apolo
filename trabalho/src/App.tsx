import React from 'react';
import 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar/Navbar';
import './components/Main/Main.css';


const App:React.FunctionComponent = () => (

      <div className="landingBody">
      <Navbar/>
      <Routes/>
      </div>
    );

export default App;
