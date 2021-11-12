const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'
exports.run = async (client, message, args) => {

    const helpmebed = new Discord.MessageEmbed()
      .setAuthor(`${client.user.tag} commands:`)
      .setDescription(`__Prefix actuel:__ **${prefix}** \n\n :tools:**-Protection** : Anti-add-bot: [;anti-add-bot + on/off], ;blacklist [;blacklist + @], ;raidmode [;raidmode on/off] \n\n :desktop:**-Backup** : ;create-backup, load-backup [;load-backup + id], ;info-backup [;info-backup + id] \n\n :pick:**-Modération** : ;ban/kick [;ban/kick + @], ;clear [;clear + number], ;mute.unumte [;mute/unmute + @ + raison], ;giverole/ungiverole [;giverole/ungive + @ + role], ;create1, ;delete1, ;warn, ;checkwarn\n\n :musical_note:**-Music(off)** : ;play [;play + music or link], ;pause, ;np, ;lyrics, ;add, ;queue, ;remove, ;destroy or kill \n\n :barber:**-Divers** : ;serverinfo, ;userinfo [!userinfo + @], ;giveaway [;giveaway + time + channel + price]`)
      .setTimestamp()
      message.channel.send(helpmebed).then(async msg => {
        msg.react("🗑️")
})}


        