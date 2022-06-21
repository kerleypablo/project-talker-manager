const generateToken = () => {
    const token1 = Math.random().toString(18).substring(2, 10);
    const token2 = Math.random().toString(18).substring(2, 10);
    const token = token1 + token2;
    return token;
};

module.exports = generateToken;