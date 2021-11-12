const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
exports.run = async (client, message, args) => {

if(message.member.hasPermission('MUTE_MEMBERS')){

const user = message.mentions.members.first()
const reponse = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let raison = args.slice(2).join(" ");
    if (!raison) raison = "**Aucune raison n'a été donné par l'autheur.**"
if(user)
user.roles.add('903322942023278652')
user.send(`Tu as été mute par ${message.author} pour la raison suivante : ${reponse.slice(1).join(" ")} `); 


}}
