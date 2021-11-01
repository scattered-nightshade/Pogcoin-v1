const items = require("../arrays/shopitems")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "shop",
    cooldown: 5,
    async execute(Discord, client, args, message, profileModel, profileData){
        try{
            if(message.channel.id === "816008277619638332") return message.channel.send(`Please use this in <#899055241104879616> or else this chat will be spammed`);
            if (items.length === 0) return message.channel.send(`<@${message.author.id}> Unfortunatly im not selling right now, ig you just need to be patient`);

            const shoplistEmbed = new MessageEmbed()
            .setColor("#7de48b")
            .setTimestamp()
            .setFooter("Steam Shop Replacement?")
            .setTitle("pog Shop")
            .setDescription(`Use ${process.env.DISCORD_PREFIX}buy to buy a role`)

            const itemlist = items.map((value, index) =>{
                return shoplistEmbed.addFields(
                    {name: `**${index + 1})** ${value.item}`, value: `${value.price} pogcoins!`}
                )
            });

            message.channel.send({ embeds: [shoplistEmbed] })
        }
        catch(err){
            console.error(err);
        }
    }
}