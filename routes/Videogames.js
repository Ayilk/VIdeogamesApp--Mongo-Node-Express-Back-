const {Router} = require('express');
const { getAllGames, addVideogames, getGameById, updateVideogame, deleteVideogame, getGameByName, getTopConsoles } = require('../controllers/Videogames');


const router = Router();

router.get('/top', getTopConsoles);
router.post('/', addVideogames);
router.get('/', getAllGames );
router.get('/:id', getGameById );
router.put('/:id', updateVideogame);
router.delete('/:id', deleteVideogame);


module.exports = router;