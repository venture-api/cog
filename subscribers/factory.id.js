const generate = require('nanoid/generate');


module.exports = (kojo) => {

    const tasu = kojo.get('tasu');
    const config = kojo.get('config');

    tasu.listen('factory.id', async ({type='general'}) => {

        const id = generate(config.id.alphabet.factory, config.id.length.factory);
        return `${config.codes.factory}-${id}-${config.codes[type]}`;
    });
};
