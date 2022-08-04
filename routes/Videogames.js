const {Router} = require('express');
const { getAllGames, addVideogames, gameDelete, updateGame } = require('../controllers/Videogames');


const router = Router();

router.post('/', addVideogames);
// router.get('/', getAllGames );
// router.get('/:id', getAllGames );
// router.delete('/:id', gameDelete);
// router.put('/:id', updateGame)


module.exports = router;