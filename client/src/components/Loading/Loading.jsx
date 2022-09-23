import React from 'react'
import './Loading.css'
import gifLoading from './256x256.gif'

function Loading() {
    return (
        <div className='contenedorLoad'>
            <img src={gifLoading}
            alt='Cargando, por favor espere' />
        </div>
    )
}

export default Loading