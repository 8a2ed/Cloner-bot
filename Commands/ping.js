const { MessageEmbed } = require("discord.js");
module.exports = class ping {
    constructor() {
        this.name = "ping",
        this.alias = [""],
        this.usage = "!ping"
    }

    async run(client, message,args) {
        try{
            let info = "ℹ️"
            let pingEmbed = new MessageEmbed()
            .setTitle(`${info} Pong`)
            .setDescription(`Latency - \`${Math.round(client.ws.ping)}\`ms.`)
            .setColor("#5DBCD2")
            message.channel.send(pingEmbed)
        }catch(e) {
            throw e;
        }
    }
} 
