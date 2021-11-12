const fs = require('fs'); 
const bdd = require('./bdd.json')
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ";"


const config = require('./config.json');
const { on } = require('events');
client.config = config;


fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event enregistrer: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Commande enregistrer: ${commandName}`);
    });
});


client.on('guildMemberAdd', member => {

  if(bdd[member.guild.id]["raidmode"] === 'on'){
    if(member.user) member.kick()
  }
  if(bdd[member.guild.id]["anti-add-bot"] === 'on'){
    if(member.user.bot === true) member.ban({reason: "bot"})
}
})






client.on('guildCreate', guild => {
    bdd[guild.id] = {
      "anti-add-bot": 'off',
      "raidmode": 'off'    
    }
    Savebdd()
});




function Savebdd() {
    fs.writeFile('./bdd.json', JSON.stringify(bdd, null, 4), (err) => {
      if(err) message.channel.send("Une erreur est survenue.");
    });
};



client.on("guildMemberAdd", async member => {
  member.roles.add('906927643792933004');
  bdd["captcha"][member.id] = { "valeur": Math.floor(Math.random() * Math.floor(10000)), "statut": false }
  Savebdd();
  const embed12 = new Discord.MessageEmbed()
  .setTitle('Captcha:')
  .setDescription(`${member} voici le code a entrer: ${bdd["captcha"][member.id]["valeur"]}`) 
  client.channels.cache.get('906927291391680554').send(embed12).then(message=> message.delete({timeout: 30000}));
})
client.on('message', async message => {
  if(message.author.bot || message.member.permissions.has('ADMINISTRATOR')) return;
  if(message.channel.id == "906927291391680554") {
      message.delete();
      if(!bdd["captcha"][message.member.id]["statut"]){
          if (isNaN(message.content)) {
              return message.channel.send('Mauvais code.').then(message=> message.delete({timeout: 15000}));
          }
          else {
              if(message.content == bdd["captcha"][message.member.id]["valeur"]){
                  bdd["captcha"][message.member.id]["statut"] = true;
                  Savebdd();
                  message.member.roles.remove('906927643792933004');
                  message.member.roles.add('905963737066901505');

              }
              else{
                  return message.channel.send('Indique la bonne valeur').then(message=> message.delete({timeout: 15000}));
              }
          }
      }
  }
})


const Canvas = require('canvas')
const moment = require('moment')
client.on("guildMemberAdd", async member => {

  let user = member;
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext(`2d`);

  const background = await Canvas.loadImage(`./image/RK-Fond_Site.png`);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.font = `40px Calvert MT Std`;
  ctx.fillStyle = `#ffffff`;

  ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);
  ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)
  ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), './Welcome.jpg');


  client.channels.cache.get('905965960580702219').send(attachment);
})



client.login('ODM2NjA0MDk2NTcxMjQ0NTg1.YIgaRw.mpjExr6SPiinBhwORH0tTfneVBU')
 


