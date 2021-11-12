
const Discord = require('discord.js');
const client = new Discord.Client();
const bdd = require('../bdd.json')
const fs = require('fs')
const prefix = '!'

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Pour activer l\'anti add bot tu as besoin d\'avoir la perm administrateur')
message.delete()
antiaddbot = message.content.slice(13)
bdd[message.guild.id]["anti-add-bot"] = antiaddbot
Savebdd()

const antiadd = new Discord.MessageEmbed()
.setTitle('Anti-Add-Bot')
.setDescription(`L'anti-add-bot est maintenant en mode ${antiaddbot}`)
message.channel.send(antiadd)
}

function Savebdd() {
    fs.writeFile('./bdd.json', JSON.stringify(bdd, null, 4), (err) => {
      if(err) message.channel.send("Une erreur est survenue.");
    });
  }