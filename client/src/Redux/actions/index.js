import axios from 'axios';
import { RESET, ORDER_BY_POPULATION, FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, GET_ACTIVITIES, POST_ACTIVITIES, DETAIL } from '../Const/Const.js'


export function getCountries() {
    return async function (dispatch) {

        axios.get('http://localhost:3001/countries')
        .then(function (response) {
            return dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            });
        }).catch(err => console.log(err));

    }
}

export function searchCountries(search) {
    return async function (dispatch) {

        axios.get('http://localhost:3001/countries?name=' + search)
        .then(function (response) {
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: response.data
            });
        }).catch(err => console.error(err))

    }
}

export function filterCountriesByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload: payload
    }
}

export function filterCountriesByActivity(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: payload
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload: payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: ORDER_BY_POPULATION,
        payload: payload
    }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/activity');
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivities(payload) {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/activity', payload);
        return dispatch({
            type: POST_ACTIVITIES,
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries/' + id);
            return dispatch({
                type: DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export function restartDetail() {
    return (dispatch) => {
        dispatch({ type: RESET })
    }
}
