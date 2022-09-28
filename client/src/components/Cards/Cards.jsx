import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterCountriesByContinent, filterCountriesByActivity, orderByName, orderByPopulation, getActivities } from "../../Redux/actions/index.js";
import { LESS_POPULATION, HIGHER_POPULATION, ALL, ALL_OF_AFRICA, AMERICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_EUROPE, ALL_OF_OCEANIA, ASCENDENTE, DESCENDENTE } from "../../Redux/Const/Const.js";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado"
import "./Cards.css";
import Error from "../Error/Error.jsx";
import Loading from "../Loading/Loading.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrden] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);


  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterCountriesByContinent(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries())
    setCurrentPage(1)
  }


  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterCountriesByActivity(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

 
  




  return (
    <div className="cardsContainer">
      <div className="filterContainer">
        <select className='filterOrderBT'
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option>Filtrar por Orden Alfabetico</option>
          <option value={ASCENDENTE}> A-Z </option>
          <option value={DESCENDENTE}> Z-A </option>
        </select>

        <select className='filterOrderBT'
          onChange={(e) => {
            handleSort2(e);
          }}
        >
          <option>Filtrar por poblacion</option>
          <option value={HIGHER_POPULATION}>Mayor Poblacion</option>
          <option value={LESS_POPULATION}>Menor Poblacion</option>
        </select>

        <select className='filterOrderBT' onChange={(e) => handleFilterActivity(e)}>
          <option value="todos"> Actividades </option>
          {activities.map((v) => (
            <option value={v.name} key={v.name}>{v.name}</option>
          ))}
        </select>

        <select className='filterOrderBT' onChange={(e) => handleFilterContinent(e)}>
          <option value={ALL}>Todos los Paises</option>
          <option value={ALL_OF_AFRICA}>Africa</option>
          <option value={ALL_OF_ANTARCTICA}>Antartida</option>
          <option value={AMERICA}>America</option>
          {/* <option value={ALL_OF_S_AMERICA}>America del Sur</option> */}
          <option value={ALL_OF_ASIA}>Asia</option>
          <option value={ALL_OF_EUROPE}>Europa</option>
          <option value={ALL_OF_OCEANIA}>Oceania</option>
        </select>
        <button className='button' onClick={handleClick}>Recargar Paises</button>
      </div>


      <div className='cardsBox'>
        {
          currentCountry.length !== 0 ?
            currentCountry?.map((country) => {  
              return (
                <div key={country.id}>
                  {country.error ? <div className="error"><Error /></div>:
                  <Link to={"/home/" + country.id}>
                    <Card
                      name={country.name}
                      flag={country.flag}
                      continent={country.continent}
                      capital={country.capital}
                      population={country.population}
                    />
                  </Link>}
                </div>
              )
            })
            : 
            <Loading />
            // <div className='loading'>
            //   <label > CARGANDO .. </label>
            //   <progress id="file" max="100" value="70"> 70% </progress>
            // </div>
        }

      </div>
      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
        currentPage={currentPage}
      />
    </div>
  );
}