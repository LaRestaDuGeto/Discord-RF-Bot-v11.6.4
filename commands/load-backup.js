const backup = require('discord-backup');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: **Perm manquante : Manage_Messages**');
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send(':warning: Tout les channels, roles, parametre vont être effacé. Envoie `oui` ou `non`!');

        if(message.content === 'non') return;

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['oui', 'non'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === 'oui';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send(new Discord.MessageEmbed()
                    .setTitle('Backup:')
                    .setDescription(`Bonjour, votre backup a été chargée avec succès`)
                    .setFooter('Rk bot', 'https://imgur.com/WSsmmMc.png')
                    .setTimestamp( )
                    );
            
                }).catch((err) => {
            
                    if (err === 'No backup found')
                        return message.channel.send(':x: Aucune backup trouvé pour '+backupID+'!');
                    else
                        return message.author.send(':x: Erreur: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send(':x: no');
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send(':x: Réssayez plus tard.');
        })

    }).catch(() => {
        return message.channel.send(':x: Aucune backup trouvé pour '+backupID+'!');
    });

};
