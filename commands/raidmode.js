
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const bdd = require('../bdd.json')
const prefix = "!"


exports.run = async (client, message, args) => {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Pour activer le raid-mode tu as besoin d\'avoir la perm administrateur')
    message.delete()
    raidmd_rp = message.content.slice(10)
    bdd[message.guild.id]["raidmode"] = raidmd_rp
    Savebdd()

    const raidembed = new Discord.MessageEmbed()
    .setTitle('Raid-Mode')
    .setColor(' ')
    .setDescription(`Le raid-mode est maintenant en mode ${raidmd_rp}`)
    message.channel.send(raidembed)
}

function Savebdd() {
    fs.writeFile('./bdd.json', JSON.stringify(bdd, null, 4), (err) => {
      if(err) message.channel.send("Une erreur est survenue.");
    });
} 
