const { Router } = require('express');


const videogamesRouter = require('./Videogames');
const consolesRouter = require('./Consoles')
const devsRouter = require('./Developers');
const authRouter = require('./Auth');



const router = Router();



router.use('/videogames', videogamesRouter);
router.use('/consoles', consolesRouter);
router.use('/developers', devsRouter);
router.use('/auth', authRouter);    

router.use('/', (req, res) => {
    res.status(200).send({message: "Ruta principal conectada exitosamente"})
})

module.exports = router;