const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setGame("NULL");
});

bot.on('message', (message) => {

    if (message.content == 'lexi sleep')
    {
        message.channel.sendMessage('DEBUG: Going to Sleep');
        //bot.user.setStatus({status: "invisible"});
        //bot.user.setGame("Test Invis");
        bot.user.setPresence({ status: "invisible", game: { name: "Counting Sheep" }});
    }

    if (message.content == 'lexi wake')
    {
        message.channel.sendMessage('DEBUG: Waking Up');
        //bot.user.setStatus({status: "online"});
        //bot.user.setGame("Test Wake");
        bot.user.setPresence({ status: "online", game: { name: "Counting Sheep" }});
    }

    if (message.content == 'quoteth the raven')
    {
        message.channel.sendMessage('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);