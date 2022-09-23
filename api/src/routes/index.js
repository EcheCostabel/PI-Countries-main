const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const RouteCountry = require('./Country');
const RouteActivity = require('./Activity');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', RouteCountry);
router.use('/activity', RouteActivity);



module.exports = router;