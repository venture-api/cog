const generate = require('nanoid/generate');


module.exports = (kojo) => {

    const tasu = kojo.get('tasu');
    const config = kojo.get('config');

    tasu.listen('player.id', async ({}) => {

        const id = generate(config.id.alphabet.player, config.id.length.player);
        return `${config.codes.player}-${id}`;
    });
};
