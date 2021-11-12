const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'
exports.run = async (client, message, args) => {

     
    const ownerid = ["804428506444202065"];
    if(ownerid.includes(message.author.id)){
        const reponse = message.content.slice(prefix.length).trim().split(/ +/g);
        if(!reponse) return message.reply('Précise le nom du channel a créer.')
        message.guild.channels.create(`${reponse.slice(1).join(" ")}`)
        message.reply(`J'ai bien créer le salon`)

}else{
    message.reply('Seul l\'owner peut éxécuter cette commande.')
    }
}
