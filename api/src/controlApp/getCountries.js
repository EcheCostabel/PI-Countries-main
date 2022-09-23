const { Country, Activity } = require('../db.js')
const axios = require('axios')

async function getCountries() {
    const apiCountry = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiCountry.data.map(country => {
        return { 
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continent: country.region,
            capital: country.capital?.map((e) => e) || ["No tiene capital"],
            subregion: country.subregion ? country.subregion : 'Undefinded Subregion',
            area: country.area,
            population: country.population

        }
        })
    
    function saveInfo() {
        apiInfo.map(info => {
            Country.findOrCreate({
                where: {
                    id: info.id,
                    name: info.name,
                },
                defaults: {
                    flag: info.flag,
                    continent: info.continent,
                    capital: info.capital,
                    subregion: info.subregion,
                    area: info.area,
                    population: info.population
                }
            }).catch((err) => {
                console.log(err)
            });
        })
    }

    saveInfo()
    return apiInfo;
}

async function getDatabase() {
    await getCountries()
    const datbase = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }
        }
    })
    return datbase;
}

const getallActivity = async () => {
    const get = await Activity.findAll()
    return get;
}

module.exports = {
    getDatabase,
    getallActivity,
}