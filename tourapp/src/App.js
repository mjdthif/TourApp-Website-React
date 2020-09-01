import React from 'react';
import './App.scss';
//Navbar 
import Navbar from './Compo/Navbar/Navbar.js'
// TourList
import TourList from "./Compo/TourList/TourList";

//This is a functional component. 
function App() {
  return (
    <div>
      
       <Navbar></Navbar>
       <TourList></TourList>
    </div>
  );
}

export default App;
