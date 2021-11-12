const Discord = require('discord.js');
const backup = require('discord-backup');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: **Perm manquante : Manage_Messages**');
    }

    const backupID = args.join(' ');

    if (!backupID)
        return message.channel.send('Entre la bonne id');

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

        const embed = new Discord.MessageEmbed()
            .setAuthor('ℹ️ Backup : ', backup.data.iconURL)
            .addField('Nom du serveur : ', backup.data.name)
            .addField('Taille : ', backup.size + ' kb')
            .addField('Créer le : ', formattedDate)
            .setFooter('Rk bot', 'https://imgur.com/WSsmmMc.png')
            .setTimestamp( )
            

        return message.channel.send(embed);

    }).catch((err) => {

        if (err === 'Je n\'ai pas trouver de backup.')
            return message.channel.send(':x: Aucune backup trouver '+backupID+'!');
        else
            return message.channel.send(':x: Erreur: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });

};
