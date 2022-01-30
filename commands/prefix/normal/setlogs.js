const db = require('quick.db');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
  if(!channel) return message.reply(':x: | Digite o canal para definir as logs do servidor')
  if(!args[0]) return message.reply(':x: | Digite o canal para definir as logs do servidor')

  let id = channel.id
  
  const embed = new Discord.MessageEmbed()
  .setTitle("<a:HYpositive:763111725510950932> | Canal de Logs Definido")
  .setColor(color)
  .setDescription(`> O novo canal de logs é ${channel}`)
  message.reply({ embeds: [embed] })
  
  db.set(`LogsChannel_${message.guild.id}`, id)
}