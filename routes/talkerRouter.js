const router = require('express').Router();
const { readContentFile } = require('../helpers/ReadWWriteFile'); 

const PATGH_FILE = './talker.json';

router.get('/talker', async (req, res) => {
    const talker = await readContentFile(PATGH_FILE) || [];
    res.status(200).json(talker);
});

module.exports = router;