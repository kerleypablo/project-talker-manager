const { readContentFile, 
      writeContentFile, 
      updateContentFile,
      deleteContentFile } = require('../helpers/ReadWWriteFile'); 

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

const updateTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const newTalker = {
      name,
      age,
      id: Number(id),
      talk,
    };
    await updateContentFile(PATH_FILE, id, newTalker);
    const allresult = await readContentFile(PATH_FILE);
    const result = allresult.find((talker) => talker.id === Number(id));
    return res.status(200).json(result);
};

const DeleteTalker = async (req, res) => {
    const { id } = req.params;
      await deleteContentFile(PATH_FILE, id); 
      return res.status(204).json();
  };

module.exports = { GetById, CreateTalker, updateTalker, DeleteTalker };