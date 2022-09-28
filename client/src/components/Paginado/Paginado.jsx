import React from "react";
import './Paginado.css'

export default function Paginado({ countriesPerPage, countries, paginado, currentPage }) {
    let pageNumbrers = []
    let Paginas = Math.ceil(countries / countriesPerPage)

    for (let i = 1; i <= Paginas; i++) {
        pageNumbrers.push(i)
    }




    return (
        <nav className='paginadoContainer'>
            <ul className='ul'>

            {
                currentPage - 1 > 0 ? (
                    <button className="numeroPaginado1" onClick={() => paginado(currentPage-1)}>Prev</button>
                ): null
            }



                {pageNumbrers &&
                    pageNumbrers.map(number => (
                        <li key={number}>
                            <a className='numeroPaginado' onClick={() => paginado(number)}> {number} </a>
                        </li>
                    ))}

                    {
                        currentPage < Paginas ? (
                            <button className="numeroPaginado1" onClick={() => paginado(currentPage+1)}>Next</button>
                        ): null
                    }
            </ul>
        </nav>
    )
}