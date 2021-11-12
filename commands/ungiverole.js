const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Tu as pas la perms admin');
 
    const user = message.mentions.members.first()
    if(!user) return message.reply('Vous devez mentionner un user.')
    const role = message.mentions.roles.first();
    if(!role) return message.reply('Mentionne un rôle à enlever.')
await user.roles.remove(role)
const removembed = new Discord.MessageEmbed()
.setDescription(`**${message.author} j'ai bien enlever le rôle: ||${role}|| à ${user}.**`)
message.channel.send(removembed)

}