const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embedhelp = new Discord.MessageEmbed()
  .setTitle("🔧| Createrole")
  .setDescription(`<a:HYpositive:763111725510950932> | Como usar: 
  
  ${prefix}createrole <nome> <permissões> <cor>(opcional)`)
  .addField("👍| Observação:",  `Permissões disponíveis: \n \`ADMINISTRATOR\` = **Adiministrador** \n \`BAN_MEMBERS\` = **Moderador** \n \`MANAGE_GUILD\` = **Server Manager**`)
  .setImage("https://cdn.discordapp.com/attachments/777870495390892033/882052292252168262/unknown.png")
  .setColor(color)
  .setTimestamp()
  .setFooter(config.footer.hgc);

  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  if(!args[0,1]) return message.reply({ embeds: [embedhelp] })

  let nome = args[0]
  let permission = args[1]
  let cor = args[2]

  if(!cor) cor = color 

  message.guild.roles.create({
    data: {
      name: `${nome}`,
      color: `${cor}`,
      permissions: `${permission}`
    },
    reason: `Comando: createrole, usuário: ${message.author.tag}`
  })

  message.reply(`:thumbsup: | Cargo criado: ${nome}`)
}