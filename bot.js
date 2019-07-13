var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "599436030914854942" && message.channel.id === "598841481423486979"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "tf" && message.channel.id === "598841481423486979"){
                message.channel.send('@here **आज से Server Private हो गया है।अतः सदस्यगणों से निवेदन है की Chat में Answer देने का प्रयास करे,जिसके परिणामस्वरूप,Text_Answer प्रदाता को उचित Role प्रदान की जाएगी।**') // Sends a message to the channel, with the content
            }
            
        }
    }
});

bot.login(process.env.BOT_TOKEN)
