const router = require('express').Router();
const { readContentFile } = require('../helpers/ReadWWriteFile');
const { CreateTalker, GetById } = require('../services/talkerServices');
const talkerValidation = require('../middlewares/talkerValidate');
const tokenValidate = require('../middlewares/TokenValidate');

const PATH_FILE = './talker.json';

router.get('/', async (req, res) => {
    const talker = await readContentFile(PATH_FILE) || [];
    res.status(200).json(talker);
});

router.post('/', tokenValidate, talkerValidation, CreateTalker);

router.get('/:id', GetById);

module.exports = router;