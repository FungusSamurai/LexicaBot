const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'lexi sleep')
    {
        message.channel.sendMessage('DEBUG: Going to Sleep');
        bot.user.setStatus("invisible");
        bot.user.setGame("Test Invis");
        //bot.user.setPresence({ status: "invisible", game: { name: 'Dreams' }});
    }

    if (message.content == 'lexi wake')
    {
        message.channel.sendMessage('DEBUG: Waking Up');
        bot.user.setStatus("online");
        bot.user.setGame("Test Wake");
    }

    if (message.content == 'quoteth the raven')
    {
        message.channel.sendMessage('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);