const Discord = require('discord.js');
const jimp = require("jimp");

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}blur`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}blur <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  let level = 3

  let image = await jimp.read(member.displayAvatarURL({ dynamic: false, format: 'png' }))
  image.blur(isNaN(level) ? 5 : parseInt(level))

  let raw = await image.getBufferAsync("image/png");

  let attachment = new Discord.MessageAttachment(raw, "blur.png")

  await message.reply({ files: [attachment] });
}