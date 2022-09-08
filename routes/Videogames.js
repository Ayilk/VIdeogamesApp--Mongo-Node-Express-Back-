const {Router} = require('express');
const { getAllGames, addVideogames, getGameById, updateVideogame, deleteVideogame, getGameByName, getTopConsoles, getTopDevelopersConsoles } = require('../controllers/Videogames');


const router = Router();

router.get('/topConsoles', getTopConsoles);
router.get('/topDevelopers', getTopDevelopersConsoles)
router.post('/', addVideogames);
router.get('/', getAllGames );
router.get('/:id', getGameById );
router.put('/:id', updateVideogame);
router.delete('/:id', deleteVideogame);


module.exports = router;