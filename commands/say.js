
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

        message.delete()
        réponse_say = message.content.slice(5)
        const sayembed = new Discord.MessageEmbed()
        .setDescription(réponse_say)
        message.channel.send(sayembed)
}