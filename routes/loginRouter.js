const router = require('express').Router();
const loginValidation = require('../middlewares/loginValidation');
const tokengeneration = require('../helpers/tokengeneration');

router.post('/', loginValidation, (req, res) => {
    const token = tokengeneration();
    console.log(token);
    req.user = { token };
    res.status(200).json({ token });
});

module.exports = router;