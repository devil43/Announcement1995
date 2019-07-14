var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "599436030914854942" && message.channel.id === "595630451301941249","598858800904142848","595821831999455232"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "tf" && message.channel.id === "595630451301941249","598858800904142848","595821831999455232"){
                message.channel.send('@here **जो जो अभी HQ में Answer दिया है उसे थोड़े देर में  Role मिल जायेगा। **') // Sends a message to the channel, with the content
            }
            
        }
    }
});

bot.login(process.env.BOT_TOKEN)
