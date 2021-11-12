const Discord = require('discord.js');
const client = new Discord.Client();
const bdd = require('../bdd.json')
const fs = require('fs')
const prefix = '!'

exports.run = async (client, message, args) => {
    if(!message.mentions.users.first())return message.reply('Mentionne qql')
    utilisateur = message.mentions.users.first().id
    const checkwarnembed = new Discord.MessageEmbed()
    .setTitle('Checkwarn:')
    .setDescription('Tu as a présent ' + bdd["warn"][utilisateur] + " avertissement")
    .setTimestamp()
    message.channel.send(checkwarnembed)    
}