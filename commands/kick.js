
exports.run = async (client, message, args) => {
    const Discord = require("discord.js")
    if(!message.member.hasPermission('KICK MEMBERS')) return message.reply('Pour activer kick, tu as besoin d\'avoir la perm KICK MEMBERS')
        const user = message.mentions.users.first();
          if (!user) return message.reply('Tu dois mentionner un utilisateur.')
            const member = message.guild.member(user);
            if(!member) return ('Je ne trouve pas cette utilisateur.')
              member
                .kick({
                  reason: 'Aucun respect...',
                })
                .then(() => {
                   const embed = new Discord.MessageEmbed()
                    .setTitle("Kicked:")
                    .setColor(' ')
                    .addField("User kicked", `${user} (ID: ${user.id})`)
                    .addField("Autor of kick", `${message.author} (ID: ${message.author.id})`)
                    .addField("Canal", message.channel)
                    .setTimestamp()
                    message.channel.send(embed);
                })
                .catch(err => {
                  message.reply(`Je ne peux pas kick cet utilisateur... \n **Logs de ma console: ||${err}||**`);
                  console.error(err);
                });
}
