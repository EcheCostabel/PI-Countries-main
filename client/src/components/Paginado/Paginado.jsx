import React from "react";
import './Paginado.css'

export default function Paginado({countriesPerPage, countries, paginado}){
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i=i+1) {
        pageNumbrers.push(i)   
    }
    return(
        <nav className='paginadoContainer'>
            <ul className ='ul'>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a className ='numeroPaginado' onClick={()=>paginado(number)}> {number} </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}