const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'lexi sleep')
    {
        message.channel.sendMessage('DEBUG: Going to Sleep');
     //   bot.user.setStatus({status: "invisible"});
        //bot.user.setPresence({ status: "invisible", game: { name: 'Dreams' }});
    }

    if (message.contgitent == 'lexi wake')
    {
        message.channel.sendMessage('DEBUG: Waking Up');
       // bot.user.setStatus({status: "online"});
       // bot.user.setPresence({ status: "online", game: { name: 'CraftMine' }});
       // bot.user.message('DEBUG Good Day.');
    }

    if (message.content == 'quoteth the raven')
    {
        message.channel.sendMessage('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);