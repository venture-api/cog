const assert = require('assert');
const generate = require('nanoid/generate');


module.exports = (kojo) => {

    const tasu = kojo.get('tasu');
    const config = kojo.get('config');

    tasu.listen('generate.resource.id', async ({type}) => {

        assert(type, 'type not defined');
        const id = generate(config.id.alphabet.resource, config.id.length.resource);
        return `${config.codes.resource}-${id}-${config.codes[type]}`;
    });
};
