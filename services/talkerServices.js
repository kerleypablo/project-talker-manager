const { readContentFile, writeContentFile } = require('../helpers/ReadWWriteFile'); 

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

const CreateTalker = async (req, res) => {
    const { name, age, talk } = req.body;
    const data = await readContentFile(PATH_FILE);
    const newTalker = {
        name,
        age,
        id: data.length + 1,
        talk,
      };
    const talker = await writeContentFile(PATH_FILE, newTalker);
    return res.status(201).json(talker);
};

module.exports = { GetById, CreateTalker };