const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'quoteth the raven')
    {
        message.reply('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);