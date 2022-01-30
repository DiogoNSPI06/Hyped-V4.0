const Discord = require('discord.js');
const Jimp = require('jimp');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}affect`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}affect <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  const base = await Jimp.read("https://i.imgur.com/0dyCAZL.png")
  const img = await Jimp.read(member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))

  img.resize(200, 157);
  base.composite(img, 180, 383);

  let raw = await base.getBufferAsync("image/png");

  const attachment = new Discord.MessageAttachment(raw, 'affect.png');

  message.reply({ files: [attachment] })
}