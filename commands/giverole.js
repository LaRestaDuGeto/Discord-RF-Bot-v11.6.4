const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Tu as pas la perms admin');

    const user = message.mentions.members.first()
    if(!user) return message.reply('Vous devez mentionner un user.')
    const role = message.mentions.roles.first();
    if(!role) return message.reply('Mentionne un rôle a donné.')
await user.roles.add(role)
const rolemebed = new Discord.MessageEmbed()
.setDescription(`**${message.author} j'ai bien attribué le rôle: ||${role}|| à ${user}.**`)
message.channel.send(rolemebed)

}