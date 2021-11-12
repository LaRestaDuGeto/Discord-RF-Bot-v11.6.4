const Discord = require('discord.js');
const client = new Discord.Client();
const bdd = require('../bdd.json')
const fs = require('fs')
const prefix = '!'

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN MEMBERS')) return message.reply('Pour warn, tu as besoin d\'avoir la perm BAN MEMBERS')
   if(!message.mentions.users.first())return message.reply('Mention qql')
   utilisateur = message.mentions.users.first().id

   if(bdd["warn"][utilisateur] == 2){
    message.guild.members.ban(utilisateur)
   }
   else{
       if(!bdd["warn"][utilisateur]){
           bdd["warn"][utilisateur] = 1
           Savebdd();
           const embed12 = new Discord.MessageEmbed()
           .setTitle('Warned')
           .setDescription('Tu as a présent ' + bdd["warn"][utilisateur] + "avertissement(s)")
           message.channel.send(embed12)
       }
       else{
           bdd["warn"][utilisateur]++
           Savebdd();
           const embed1 = new Discord.MessageEmbed()
           .setTitle('Warned')
           .setDescription('Tu as a présent ' + bdd["warn"][utilisateur] + "avertissement")
           message.channel.send(embed1)
       }
   }
} 


function Savebdd() {
    fs.writeFile('./bdd.json', JSON.stringify(bdd, null, 4), (err) => {
      if(err) message.channel.send("Une erreur est survenue.");
    });
  }