const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setStatus("idle",);
    bot.user.setGame("Watching the Stars");
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
        
        if (message.author.username == 'Bigmotech')
        {
            message.reply('Hello Yorg, care for some tea?');
        }
        else if (message.author.username == 'mph0017')
        {
            message.reply('Welcome back Bram, how is my bow holding up?');
        }
        else if (message.author.username == 'mph0017')
        {
            
        }
        else if (message.author.username == 'mph0017')
        {

        }
        else if (message.author.username == 'mph0017')
        {

        }
        else if (message.author.username == 'mph0017')
        {

        }
        else
        {
            message.channel.sendMessage('Nevermore!');
        }
    }

});

bot.login(process.env.BOT_TOKEN);