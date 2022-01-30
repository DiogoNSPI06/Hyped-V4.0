const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  let serverpoints = db.get(`${message.guild.id}_${message.author.id}_points`)
  let globalpoints = db.get(`${message.author.id}_points`)

  if(!serverpoints) serverpoints = 0
  if(!globalpoints) globalpoints = 0

  const member = message.mentions.members.first()

  if(member) {
    let serverpoint1s = db.get(`${message.guild.id}_${member.id}_points`)
    let globalpoint1s = db.get(`${member.id}_points`)

    if(!serverpoint1s) serverpoint1s = 0
    if(!globalpoint1s) globalpoint1s = 0

    const embd = new Discord.MessageEmbed()
    .setTitle(`🏆| Pontos de ${member.user.tag}`)
    .setDescription(`> XP nesse servidor: **${serverpoint1s}**
  
    > XP global: **${globalpoint1s}**`)
    .setColor(color)
    .setThumbnail(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();

    message.reply({ embeds: [embd] });
  }

  if(!member) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`🏆| Pontos de ${message.author.tag}`)
    .setDescription(`> Pontos nesse servidor: **${serverpoints}**
  
    > Pontos globais: **${globalpoints}**`)
    .setColor(color)
    .setThumbnail(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
    message.reply({ embeds: [embed] });
  }
}