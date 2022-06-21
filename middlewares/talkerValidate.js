const talkerschema = require('../schemas/talkerschema');

const talkerValidation = (req, res, next) => {
    const { name, age, talk } = req.body;
    const { error } = talkerschema.validate({ name, age, talk });

    if (!error) return next();

  return res.status(400).json({ message: error.message });
};

module.exports = talkerValidation;