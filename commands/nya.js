const lewdImages = require("../arrays/lewdImages")

module.exports = {
    name: "rob",
    description: "steal someones money",
    async execute(Discord, client, args, message, MessageEmbed, profileModel, profileData){
        try{
            let uwuEmbed = new MessageEmbed()
            .setImage(lewdImages[Math.floor(Math.random() * lewdImages.length)]);
            message.channel.send({ embeds: [uwuEmbed] });
        }
        catch(err){
            console.log(err);
        }

    }

}