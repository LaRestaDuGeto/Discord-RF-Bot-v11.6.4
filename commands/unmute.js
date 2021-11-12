const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
exports.run = async (client, message, args) => {

if(message.member.hasPermission('MUTE_MEMBERS')){
    const user = message.mentions.members.first()
        user.roles.remove('903322942023278652')
        user.send(`Tu as été unmute par ${message.author}.`)

        const logsunmute = new Discord.MessageEmbed()
    .setColor('#c01b1b')
    .setTitle(`UNMUTE`)
    .setDescription(`${user} a été unmute par ${message.author}`)
    client.channels.cache.get('902157089441472572').send(logsunmute)
    }
}