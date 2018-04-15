const Kojo = require('kojo');
const Tasuu = require('tasu');
const configLoader = require('yt-config');
const pack = require('./package.json');


module.exports = async () => {

    const config = await configLoader('config.ini');


    // kojo

    const cog = new Kojo('cog', config.kojo, pack);
    cog.set('config', config);


    // tasu

    const tasu = new Tasuu(config.tasu);
    await tasu.connected();
    cog.set('tasu', tasu);

    await cog.ready();
    return cog;
};
