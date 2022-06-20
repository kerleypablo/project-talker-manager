const { readContentFile } = require('../helpers/ReadWWriteFile'); 

const PATH_FILE = './talker.json';
const GetById = async (req, res) => {
    const { id } = req.params;
    const allresult = await readContentFile(PATH_FILE);
    const result = allresult.find((talker) => talker.id === Number(id));
    if (!result) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    res.status(200).json(result);
};

module.exports = { GetById };