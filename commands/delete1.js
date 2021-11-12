const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'
exports.run = async (client, message, args) => {

     
    const ownerid = ["804428506444202065"];
    if(ownerid.includes(message.author.id)){
        const channeltodel = message.mentions.channels.first()
        if(!channeltodel) return message.reply('Mentionne un channel a effacé')
        channeltodel.delete()
        message.reply(`J'ai bien delete le salon mentionné!`)

}else{
    message.reply('Seul l\'owner peut éxécuter cette commande.')
    }
}
