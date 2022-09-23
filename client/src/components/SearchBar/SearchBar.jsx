import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../Redux/actions/index.js';
import './SearchBar.css'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault();
        if (!search.length) {
            setErrors({name:'Colocar un Pais !!'});
        } else {
            dispatch(searchCountries(search))
            setSearch('')
            setErrors({name: ''})

        }
    }

    function onInputChange(e) {
        e.preventDefault();
        setErrors({name: ''})
        setSearch(e.target.value)
    }

    return (<div className='formulario'>
        <form onSubmit={onSubmit}>
            <div>
            <input className='inCountry' type="text" placeholder='Ingrese un pais...' onChange={onInputChange} value={search} />
            <input className='inBt' type="submit" value="🔍" />
            
            {errors.name && (
                <div className='errors'>
                    <p>{errors.name}</p>
                </div>
            )}
            
            </div>
        </form>
    </div>)
}