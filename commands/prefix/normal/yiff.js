const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, prefix, color, config) => {
  console.log("✅| NSFW command executed!")

  let botmode = db.get(`botmode_${message.guild.id}`)

  const embed = new Discord.MessageEmbed()
  .setTitle(`<:betaGasm:922714074360479794> | Modo NSFW desabilitado`)
  .setDescription(`> Para habilitar o modulo use \`${prefix}servermode\``)
  .setColor(color)
  .setFooter(config.footer.hgc)

  if(!botmode || botmode === "tosco" || "music") return message.reply({ embeds: [embed] })
}