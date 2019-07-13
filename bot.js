var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "597802520601034790" && message.channel.id === "595640732564586543","595635734904307742","595636121124208640","595639586726740049","595639853962756110"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "tf" && message.channel.id === "595640732564586543","595635734904307742","595636121124208640","595639586726740049","595639853962756110"){
                message.channel.send('@here **Game Is About To Start...Please React Below.....**') // Sends a message to the channel, with the content
            }
            
        }
    }
});

bot.login(process.env.BOT_TOKEN)
