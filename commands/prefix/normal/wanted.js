const Discord = require('discord.js');
const jimp = require("jimp");

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}jail`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}jail <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  //member.displayAvatarURL({ dynamic: false, format: 'png' })

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  let image = member.displayAvatarURL({ dynamic: false, format: 'png' })

  let base = await jimp.read("https://i.imgur.com/Ucap7VU.png");
  let img = await jimp.read(image);

  img.resize(447, 447);
  base.composite(img, 145, 282);

  let raw = await base.getBufferAsync("image/png");

  let attachment = new Discord.MessageAttachment(raw, "wanted.png")

  await message.reply({ files: [attachment] });
}