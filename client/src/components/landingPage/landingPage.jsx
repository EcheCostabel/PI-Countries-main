import React from "react";
import {Link} from "react-router-dom";
import './landingPage.css';

export default function LandingPage(){
    return(
        <div className ="landingPage">
            <h1 className = 'landingTitle'>PI-COUNTRIES</h1>
            <Link to='/home'>
                <button className='landingButton'>Inicio</button>
            </Link>
            <div>
                <p className="exe">Alumno: Exequiel Costabel</p>
            </div>
        </div>
    )
}