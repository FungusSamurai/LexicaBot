const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'quoteth the raven')
    {
        message.reply('Nevermore! ' + message.author.toString());
    }

});

bot.login(process.env.BOT_TOKEN);