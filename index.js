const { Client, MessageEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const client = new Client({ disableMentions: 'everyone' });
var approx = require('approximate-number');
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});


client.on("ready", () => {
    console.log("Cloner is working by 8a2ed");
    client.user.setActivity(`8a2ed/CodeStation`)
});

client.on("message", async (message) => {

    if(message.channel.type === 'dm') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});


client.on("guildCreate", guild => {
  
      let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    
})

client.login(config.token)
