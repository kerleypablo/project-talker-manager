const router = require('express').Router();
const { readContentFile } = require('../helpers/ReadWWriteFile');
const services = require('../services/talkerServices');

const PATH_FILE = './talker.json';

router.get('/', async (req, res) => {
    const talker = await readContentFile(PATH_FILE) || [];
    res.status(200).json(talker);
});

router.get('/talker/:id', services.GetById);

module.exports = router;