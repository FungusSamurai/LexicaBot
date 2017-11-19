const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'quoteth the raven')
    {
        message.reply('Nevermore!');
    }

    if (message.author == 'BigMo')
    {
        message.reply('Greetings, General Yorg, care for some tea?');
    }

});

bot.login('MzgxOTAzNjQxODUxNzIzNzg3.DPN7Bw.GwErl4m5np4H2q59WmHR8vsx1NE');