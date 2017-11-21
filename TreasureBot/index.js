const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setStatus("idle",);
});

bot.on('message', (message) => {

    if (message.content == 'lexi sleep')
    {
        message.channel.sendMessage('DEBUG: Going to Sleep');
        bot.user.setStatus("dnd",);
        bot.user.setGame("Counting Sheep");
    }

    if (message.content == 'lexi wake')
    {
        message.channel.sendMessage('DEBUG: Waking Up');
        //bot.user.setStatus({status: "online"});
        bot.user.setStatus("online",);
        bot.user.setGame("Sipping Tea");
    }

    if (message.content == 'quoteth the raven')
    {
        if (message.author.username == 'Bigmo')
        {
            message.reply('Hello Yorg, care for some tea?');
        }
        else
        {
            message.channel.sendMessage('Nevermore!');
        }
    }

});

bot.login(process.env.BOT_TOKEN);