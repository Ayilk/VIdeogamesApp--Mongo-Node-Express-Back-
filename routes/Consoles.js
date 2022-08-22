const {Router} = require('express');
const { getAllConsoles, addManyConsoles, getConsoleById } = require('../controllers/Consoles');

const router = Router();

router.get('/', getAllConsoles);
router.get('/:id', getConsoleById)
router.post('/manyconsoles', addManyConsoles);


module.exports = router;