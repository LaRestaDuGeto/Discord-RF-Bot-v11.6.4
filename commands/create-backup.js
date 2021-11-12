const backup = require('discord-backup');
const config = require('../config.json');
const Discord = require('discord.js');


exports.run = async (client, message, args) => {


    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: **Perm manquante : ADMINISTRATOR**');
    }

    backup.create(message.guild).then((backupData) => {

       
        
        return  message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:white_check_mark: - Backup crée avec succès: `)
        .setDescription(`**Author:** *${message.author}* \n\n **Backup id:** *${backupData.id}* \n\n **Pour activer la backup, faites ||!load-backup ${backupData.id}||.**`)
        .setFooter('Rk bot', 'https://imgur.com/WSsmmMc.png')
        .setTimestamp( )
        )
        ////**__Backup créer avec succès: `'+backupData.id+'`!`'+config.prefix+'load-backup '+backupData.id+'`.__**

    }).catch(() => {
        console.log()

        return message.channel.send(':x: Probleme: je n\'ai pas réussi a créer une backup.');
        

    });

};



