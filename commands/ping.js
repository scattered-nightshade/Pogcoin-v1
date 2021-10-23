module.exports = {
    name: "ping",
    aliases: ["server"],
    cooldown: 5,
    description: "pings the server to see the delay between the client and the server",
    async execute(Discord, client, args, cmd, message, MessageEmbed, profileModel, profileData){

        try{
            const pogCoinPing = new MessageEmbed() //Starts the proccess for creating an embed
            .setColor('#ffff00')
            .setTimestamp()
            .setFooter('Reddit Gold Replacement?')
            .addFields(
                {name: "Ping Pong", value: `🏓Latency is ${Date.now() - message.createdTimestamp}ms.`} //Its creates a time stamp for the message then compares it to when the message is actually sent to get a mostly accurate representation of the Client/Server delay
            );
    
            message.channel.send({ embeds: [pogCoinPing] }) 
    
        }
        catch(err){
            console.log(err);
        }
    }
}