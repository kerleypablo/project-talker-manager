const fs = require('fs').promises;

const readContentFile = async (path) => {
    try {
        const content = await fs.readFile(path, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        return null;
    }
};

const writeContentFile = async (path, content) => {
    try {
        const arrayContent = await readContentFile(path) || [];
        
        arrayContent.push(content);
        await fs.writeFile(path, JSON.stringify(arrayContent));

        return content;
    } catch (error) {
        return null;
    }
};

const updateContentFile = async (path, id, content) => {
    try {
        const arrayContent = await readContentFile(path) || [];
        const filterId = arrayContent.filter((talker) => talker.id !== Number(id));
        filterId.push(content);
        await fs.writeFile(path, JSON.stringify(filterId));
        
        return filterId;
    } catch (error) {
        return null;
    }
};

module.exports = { readContentFile, writeContentFile, updateContentFile };
