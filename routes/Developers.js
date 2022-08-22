const {Router} = require('express');
const { getAllDevelopers, addManyDevelopers, getDevById } = require('../controllers/Developers');


const router = Router();

router.get('/', getAllDevelopers);
router.get('/:id', getDevById);
router.post('/manydevs', addManyDevelopers);


module.exports = router;