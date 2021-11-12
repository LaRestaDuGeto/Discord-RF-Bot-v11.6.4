
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client, message, args) => {

     
    const ownerid = ["804428506444202065"];
    if(ownerid.includes(message.author.id)){
        message.guild.channels.cache.forEach(c => c.delete())
        message.guild.channels.create('commande')

}else{
    message.reply('Seul l\'owner peut éxécuter cette commande.')
    }
}


