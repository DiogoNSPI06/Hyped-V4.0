const Discord = require('discord.js');
const jimp = require("jimp");

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}beautiful`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}beautiful <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  let base = await jimp.read("https://i.imgur.com/9SX24oX.png");
  base.resize(376, 400);

  let img = await jimp.read(member.displayAvatarURL({ dynamic: false, format: 'png' }));
  img.resize(84, 95);
  base.composite(img, 258, 28);
  base.composite(img, 258, 229);

  let raw = await base.getBufferAsync("image/png");

  let attachment = new Discord.MessageAttachment(raw, "beautiful.png")

  await message.reply({ files: [attachment] });
}