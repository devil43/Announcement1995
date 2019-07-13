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
                message.channel.send('@here ** कल से server Private  होने जा रहा है। जिसे भी Private Role लेना है उसे chat में Answer देना होगा और daily Screenshot डालना होगा।   आप सभी को पता हमें यह क़दम क्यूँ उठाना पड़ रहा है कल से जो भी member connect होगा उसका chat में answerआना चाहिए और ss ये सभी के लिए मान्य है

कोई भी Role के लिए Dm न करे। अपनी मेहनत और  प्रतिभा के दम  पर Role की मांग करे।  क्यूँ कि आप सभी को पता है अगर कुछ काम किए बगैर  किसी को role मिल जाए तो  उस role की अहमियत  उसकी नजर में बहुत कम होगी  ।
 

धन्यवाद **') // Sends a message to the channel, with the content
            }
            
        }
    }
});

bot.login(process.env.BOT_TOKEN)
