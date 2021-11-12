
const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async (client, message, args, reaction) => {

    const voice = message.member.voice.channel
    if(!voice) return message.reply("Tu dois etre dans un channel vocal pour me faire rejoindre.");

    const voiceChannel = message.member.voice.channel
    voiceChannel.join()
    message.channel.send(`${message.author} je suis bien dans le vocal.`)
    .then(connection => console.log(`Connecter par ${message.author}`))
    .catch(console.error);
}