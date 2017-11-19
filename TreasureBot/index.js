const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'lexisleep')
    {
        bot.user.message('Going to Sleep');
        bot.user.setPresence({ status: "invisible", game: { name: 'Dreams' }});
    }

    if (message.content == 'lexiwake')
    {
        bot.user.setPresence({ status: "online", game: { name: 'CraftMine' }});
        bot.user.message('Good Day.');
    }

    if (message.content == 'quoteth the raven')
    {
        message.reply('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);