const items = require("../economy/shopitems")
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "shop",
    async execute(Discord, client, args, message, profileModel, profileData){

        if (items.length === 0) return message.channel.send(`<@${message.author.id}> Unfortunatly im not selling right now, ig you just need to be patient`);

        const shoplist = items.map((value, index) =>{
            return `**${index + 1})** ${value.item} -> ${value.price} coins!\n`
        });

        const shoplistEmbed = new MessageEmbed()
        .setColor("#7de48b")
        .setTimestamp()
        .setFooter("Steam Shop Replacement?")
        .addFields(
            {name: "Roy Shop", value: `${shoplist}`}
        );

        message.channel.send({ embeds: [shoplistEmbed] })

    }
}