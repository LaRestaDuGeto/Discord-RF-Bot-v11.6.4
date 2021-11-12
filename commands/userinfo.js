exports.run = async (client, message, args) => {
        const Discord = require("discord.js")
        const user = message.mentions.users.first() || message.member.user 
        const moment = require('moment')
        const member = message.guild.members.resolve(user)
        const uimbed = new Discord.MessageEmbed()
        .setColor(' ')
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${user.username} Info`)
        .addField("**Pseudo**", `${user}`, true)
        .addField("**Discriminator**", `${user.discriminator}`, true)
        .addField("**ID**", `${user.id}`)
        .addField("**Status**", `${user.presence.status}`, true)
        .addField("**Créer le:**", moment(member.user.createdAt).format('DD/MM/YYYY'))
        .addField("**A rejoint le serveur le:**", moment(member.joinedAt).format('DD/MM/YYYY'))
        message.channel.send(uimbed)

    }
