const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setGame("NULL");
    bpt.user.setStatus({status: "online"})
});

bot.on('message', (message) => {

    if (message.content == 'lexi sleep')
    {
        message.channel.sendMessage('DEBUG: Going to Sleep');
        client.user.setStatus("idle");
        bot.user.setGame("Counting Sheep");
    }

    if (message.content == 'lexi wake')
    {
        message.channel.sendMessage('DEBUG: Waking Up');
        //bot.user.setStatus({status: "online"});
        client.user.setStatus("online");
        bot.user.setGame("Sipping Tea");
    }

    if (message.content == 'quoteth the raven')
    {
        message.channel.sendMessage('Nevermore!');
    }

});

bot.login(process.env.BOT_TOKEN);