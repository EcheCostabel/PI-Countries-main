import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import './NavBar.css'

export default function NavBar() {



  return (
    
      <div className='navContent'>
      {/* <div className='conteinerMerch'>
        <div className='countries'>Countries</div>
      </div> */}
        <div className="contenedor">
        <Link className='navLink' to='/home'>Home</Link>
        <Link className='navLink' to='/activity'>Crear Actividad</Link>
        <Link className='navLink' to='/activities'>Lista de Actividades</Link>
        <SearchBar className='navSearchBar' />
        </div>
      </div>
    
  );
}