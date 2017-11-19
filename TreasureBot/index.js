const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'LexiSleep')
    {
        bot.user.setPresence('invisible', false);
    }

    if (message.content == 'LexiWake')
    {
        bot.user.setPresence('online', false);
        bot.user.message('Good Day.');
    }

    if (message.content == 'quoteth the raven')
    {
        message.reply('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);