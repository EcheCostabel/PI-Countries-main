import React from "react"
// import { Link } from "react-router-dom"
import './Card.css'



export default function Card({name, flag, continent, capital, population, area}) {
  return (
  <div className='cardContainer'>
      <h3 className="h3">{name}</h3>
      <img className= 'cardImg'src={flag} alt='Imagen no encontrada'/>
      <div className='infoConteiner'>
      <h5 className='content'>Capital: {capital}</h5>
      <h5 className='content'>Continente: {continent}</h5>
      <h5 className='content'>Poblacion: {population}</h5>
      <h5 className='content'>Area: {area}</h5>
      </div>
  
  </div>
  
  )

};