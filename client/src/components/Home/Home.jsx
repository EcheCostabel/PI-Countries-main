import React from "react";
import NavBar from '../NavBar/NavBar'
import Cards from '../Cards/Cards'
import './Home.css'

export default function Home() {
  return (
    <div className = 'homeContainer'>
      <div className = 'navBar'>
      <NavBar/>
     </div>
     <div className = 'cards'>
      <Cards/>
     </div>
    </div>
  );
}