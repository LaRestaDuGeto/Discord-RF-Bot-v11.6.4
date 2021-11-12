
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

     
    const ownerid = ["804428506444202065"];
    if(ownerid.includes(message.author.id)){
    const guild = message.guild
    guild.leave()

}else{
    message.reply('Seul l\'owner peut éxécuter cette commande.')
    }
}