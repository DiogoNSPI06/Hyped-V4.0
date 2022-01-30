const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {

  const embederrorkick = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}Kick`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}kick <usuário> <motivo>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  if(!message.member.hasPermission(Permissions.FLAGS.BAN_MEMBERS) {
    return message.reply("❌ | Nop! Vc não pode usar isso!")
  }

  if(!message.guild.me.hasPermission(Permissions.FLAGS.BAN_MEMBERS) {
    return message.reply("❌ | Não Tenho Permissão!")
  }

  let membro = message.mentions.members.first()
  if(!membro) return message.reply({ embeds: [embederrorkick] })

  if(membro.user.id === message.author.id) {
    return message.reply("❌ | Por quê você quer se Expulsar?")
  }

  if(membro.user.id === client.user.id) {
    return message.reply("❌ | Por quê você quer me Expulsar?")
  }

  if(!membro.bannable) {
    return message.reply("❌ | Não posso Expulsar este Usuário!")
  }

  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("❌ | Eu não posso Expulsar este membro!")
  }

  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"

  const embedban = new Discord.MessageEmbed()
  .setTitle("<:HYbanido:822151905593393164>| Alguém foi Expulso!")
  .setColor("#ff2848")
  .addField("🙋| Membro", membro.user.tag, false)
  .addField("🔧| Moderador", message.author.tag, false)
  .addField("📰| Motivo", motivo, false)
  message.channel.send({ embeds: [embedban] })
  membro.kick({reason: motivo})

}