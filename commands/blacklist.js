const Discord = require('discord.js');
const client = new Discord.Client();
const bdd = require('../bdd.json')
const fs = require('fs')
const prefix = ';'
exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Pour blacklist un membre, tu as besoin d\'avoir la perm ADMINISTRATOR')
    if(!message.mentions.users.first())return message.reply('Mentionne qql')
    blacklisted = message.mentions.users.first().id

    if(!bdd["blacklist"][blacklisted]){
        bdd["blacklist"][blacklisted] = 1
    message.guild.members.ban(blacklisted)
    message.channel.send(`${blacklisted} a été ajoutée a la blackilist`)

}

function Savebdd() {
    fs.writeFile('./bdd.json', JSON.stringify(bdd, null, 4), (err) => {
      if(err) message.channel.send("Une erreur est survenue.");
    });
}}