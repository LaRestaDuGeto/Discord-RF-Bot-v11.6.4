const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms')
const prefix = '!'
exports.run = async (client, message, args) => {

if(message.member.hasPermission('ADMINISTRATOR')){
    let args = message.content.substring(prefix.length).split(" ")
    let time = args[1]
    if (!time) return message.channel.send('Vous n\'avez pas précisé votre heure!');

    if (
        !args[1].endsWith("d") &&
        !args[1].endsWith("h") &&
        !args[1].endsWith("m") &&
        !args[1].endsWith("s")
    )
        return message.channel.send("Vous devez utiliser d (jours), h (heures), m (minutes) ou s (seconde)")

    let gchannel = message.mentions.channels.first();
    if (!gchannel) return message.channel.send("Je ne trouve pas le channel que vous avez demander sur le serveur!")

    let prize = args.slice(3).join(" ")
    if (!prize) return message.channel.send(`Quelle est le prix que vous voulez faire gagner ?`)

    message.delete()
    let gembed = new Discord.MessageEmbed()
        .setTitle('🎉Nouveaux Giveaway!🎉')
        .setColor( )
        .setDescription(`Réagissez avec :tada: pour participer au concours!\nFait par: **${message.author}**\nTemps: **${time}**\nPrix: **${prize}**`)
        .setTimestamp(Date.now + ms(args[1]))
        .setFooter('Il se terminera à')
        .setTimestamp()
    let m = await gchannel.send(gembed)
    m.react("🎉")
    setTimeout(() => {
        if (m.reactions.cache.get("🎉").count <= 1) {
        return message.reply("Désolé mais il y a pas assez de personnes pour désigner un gagnants!")
        }

        let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
        gchannel.send(`Toutes nos félicitations ${winner}! Vous venez de gagner le **${prize}**!`);
    }, ms(args[1]));
} else message.reply("Vous n'avez pas la permission || ADMINISTRATOR ||")
}