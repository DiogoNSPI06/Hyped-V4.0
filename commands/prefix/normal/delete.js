const Discord = require('discord.js');
const jimp = require('jimp');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}delete`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}delete <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  //member.displayAvatarURL({ dynamic: false, format: 'png' })

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  let bg = await jimp.read("https://i.imgur.com/bA4rhoQ.png");
  image = await jimp.read(member.displayAvatarURL({ dynamic: false, format: 'png' }));

  image.resize(195, 195);
  bg.composite(image, 120, 135);

  let raw = await bg.getBufferAsync("image/png");

  let attachment = new Discord.MessageAttachment(raw, "blur.png")

  await message.reply({ files: [attachment] });
}