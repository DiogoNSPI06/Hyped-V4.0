const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embederror = new Discord.MessageEmbed()
   .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}sobremim`)
   .setColor(color)
   .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}sobremim <bio> `)
   .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`);
  let bio = args.join(' ')

  if(!bio) return message.reply({ embeds: [embederror] })

  message.reply(`Seu novo sobremim é: \`${bio}\`, Use ${prefix}perfil para ver sua Bio!`)
  db.set(`sobremim_${message.author.id}`, bio)
}