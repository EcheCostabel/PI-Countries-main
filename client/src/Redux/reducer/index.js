import { FILTER_BY_ACTIVITIES, FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_NAME, SEARCH_COUNTRIES, ASCENDENTE, POST_ACTIVITIES, GET_ACTIVITIES, ORDER_BY_POPULATION, HIGHER_POPULATION, DETAIL, RESET } from '../Const/Const.js'

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    detail: [],
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }

        case FILTER_BY_CONTINENT:
            const filtredCountriesByContinent = state.allCountries
            const continentFilteredBC = action.payload === 'All' ? filtredCountriesByContinent : filtredCountriesByContinent.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: continentFilteredBC
            }

        case FILTER_BY_ACTIVITIES:
            const filtredCountriesByActivities = state.allCountries
            const continentFilteredBA = filtredCountriesByActivities.filter(function (c) {
                return c.activities.find((c) => {
                    return c.name === action.payload;
                });
            });

            if (action.payload === 'todos') {
                return {
                    ...state,
                    countries: filtredCountriesByActivities
                }
            } else {
                return {
                    ...state,
                    countries: continentFilteredBA
                }
            }

        case POST_ACTIVITIES:
            return {
                ...state
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case RESET:
            return {
                ...state,
                detail: []
            }

        case SEARCH_COUNTRIES:
            // const errorName = [{ id: 1, error: "El pais no existe" }]
            // const verificacionName = action.payload.length !== 0 ? action.payload : errorName
            return {
                ...state,
                countries: action.payload
            }

        case ORDER_BY_NAME:
            let orderCountriesByName = action.payload === ASCENDENTE ? state.countries.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }) :
                state.countries.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })

            return {
                ...state,
                countries: orderCountriesByName
            }

        case ORDER_BY_POPULATION:
            let orderCountriesByPopulation = action.payload === HIGHER_POPULATION ? state.countries.sort((a, b) => {
                if (a.population < b.population) {
                    return 1;
                }
                if (a.population > b.population) {
                    return -1;
                }
                return 0;
            }) :
                state.countries.sort((a, b) => {

                    if (a.population < b.population) {
                        return -1;
                    }
                    if (a.population > b.population) {
                        return 1;
                    }
                    return 0;
                })

            return {
                ...state,
                countries: orderCountriesByPopulation
            }

        default:
            return state;
    }
}