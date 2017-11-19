const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'quoteth the raven')
    {
        message.reply('Nevermore!');
    }

    if (message.author == 'BigMo')
    {
        message.reply('Greetings, General, care for some tea?');
    }

});

bot.login(process.env.BOT_TOKEN);