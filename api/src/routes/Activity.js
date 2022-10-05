const { Router } = require('express')
const router = Router();
const { Country, Activity } = require('../db.js');
const { getallActivity } = require('../controlApp/getCountries.js')

router.post('/', async function (req, res) {
    const { name, difficulty, duration, season, countryId, precio} = req.body
    const createActivity = await Activity.create({
        idPaises: countryId,
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
        precio: precio,
    })
    const pais = await Country.findAll({
        where: {
            id: countryId,
        }
    })
    createActivity.addCountries(pais)
    res.status(200).send(createActivity)

})


router.get('/', async (req, res) => {
    const activity = await getallActivity()
    res.status(200).send(activity)
})





module.exports = router;