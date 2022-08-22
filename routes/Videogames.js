const {Router} = require('express');
const { getAllGames, addVideogames, getGameById, updateVideogame } = require('../controllers/Videogames');


const router = Router();

router.post('/', addVideogames);
router.get('/', getAllGames );
router.get('/:id', getGameById );
router.put('/:id', updateVideogame);
// router.delete('/:id', gameDelete);


module.exports = router;