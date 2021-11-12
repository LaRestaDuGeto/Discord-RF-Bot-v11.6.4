const Discord = require("discord.js")
const client = new Discord.Client();

exports.run = async (client, message, args) => {

if(message.member.hasPermission('MANAGE_MESSAGES')){
    const args = message.content.split(" ");
    
    if(args[1] == undefined){
      message.reply("Nombre de message non ou mal défini.")
    }
    else {
      const number = parseInt(args[1]);

      if(isNaN(number)){
        message.reply("Nombre de message non ou mal défini.");
      }
      else {
        message.delete()
        message.channel.bulkDelete(number).then(messsages => {
          message.channel.send(`J'ai supprimé ${number} messages. `)
        }).catch(err => {
          console.log("Erreur de clear: " + err);
        })
      }
    }
  } else message.reply('Vous n\'avez pas la permission || MANAGE_MESSAGE ||')
}
