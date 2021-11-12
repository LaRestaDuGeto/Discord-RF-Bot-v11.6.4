
exports.run = async (client, message, args) => {
        const Discord = require("discord.js")
        if(!message.member.hasPermission('BAN MEMBERS')) return message.reply('Pour activer ban, tu as besoin d\'avoir la perm BAN MEMBERS')
            const user = message.mentions.users.first();
              if (!user) return message.reply('Tu dois mentionner un utilisateur.')
                const member = message.guild.member(user);
                if(!member) return ('Je ne trouve pas cette utilisateur.')
                  member
                    .ban({
                      reason: 'Aucun respect...',
                    })
                    .then(() => {
                       const embed = new Discord.MessageEmbed()
                        .setTitle("Banned:")
                        .setColor(' ')
                        .addField("User banned", `${user} (ID: ${user.id})`)
                        .addField("Autor of ban", `${message.author} (ID: ${message.author.id})`)
                        .addField("Canal", message.channel)
                        .setTimestamp()
                        message.channel.send(embed);
                    })
                    .catch(err => {
                      message.reply(`Je ne peux pas ban cet utilisateur... \n **Logs de ma console: ||${err}||**`);
                      console.error(err);
                    });
}
