const { Router } = require('express')
const router = Router();
const { getDatabase } = require('../controlApp/getCountries.js')

router.get('/', async function (req, res) {
    const { name } = req.query
    let countriesTotal = await getDatabase();
    if (name) {
        let countriesName = await countriesTotal.filter(elements => elements.name.toLowerCase().includes(name.toLowerCase()));
        if (countriesName.length) {
            res.status(200).send(countriesName)
        } else {
            res.status(404).send('El pais no existe')
        }
    } else {
        res.status(200).send(countriesTotal)
    }
})

router.get('/:id', async function (req, res) {
    const { id } = req.params;
    let countriesTotal = await getDatabase();
    if (id) {
        let countriesID = await countriesTotal.filter(elements => elements.id == id.toUpperCase());
        if (countriesID.length) {
            res.status(200).send(countriesID);
        } else {
            res.status(404).send("El id no existe");
        }
    } else {
        res.status(200).send(countriesTotal)
    }
})




module.exports = router;