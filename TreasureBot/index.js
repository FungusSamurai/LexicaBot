const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'lexi sleep')
    {
        message.channel.sendMessage('DEBUG: Going to Sleep');
     //   bot.user.setStatus({status: "invisible"});
        //bot.user.setPresence({ status: "invisible", game: { name: 'Dreams' }});
    }

    if (message.content == 'lexi wake')
    {
        message.channel.sendMessage('DEBUG: Waking Up');
    }

    if (message.content == 'quoteth the raven')
    {
        message.channel.sendMessage('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);