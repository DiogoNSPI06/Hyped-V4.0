const Discord = require('discord.js')
const Canvas = require('canvas')

module.exports.run = async (client, message, args, prefix, color, config) => {
  let numero = Math.floor(Math.random() * 100) + 0;

  const embedaviso = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}baitola`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}baitola <@membro>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  let membro = message.mentions.users.first()
  if(!membro) return message.reply({ embeds: [embedaviso] });

  const image = membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })

  //Avatar do usuário gay
  let bg = await Canvas.loadImage("https://i.imgur.com/vBCTgtQ.png");
  let img = await Canvas.loadImage(image);

  const canvas = Canvas.createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  
  ctx.drawImage(img, 0, 0, img.width, img.height);
  ctx.drawImage(bg, 0, 0, img.width, img.height);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'baitola.png')

  let channel = client.guilds.cache.get("777870393137430589").channels.cache.get("777870601243197451")
  channel.send({ files: [attachment] }).then(msg => {
    msg.attachments.forEach(attach => {
      const url = attach.url;

      let embedono = new Discord.MessageEmbed()
      .setTitle(`:rainbow_flag: │Teste de Baitola!`)
      .setDescription(`${membro.username} é **0%** Baitola`)
      .setThumbnail(url)
      .setColor(color)
      if(membro.id === "732549418829611098") return message.reply({ embeds: [embedono] })

      let embed = new Discord.MessageEmbed()
      .setTitle(`:rainbow_flag: │Teste de Baitola!`)
      .setDescription(`${membro.username} é **${numero}%** Baitola`)
      .setThumbnail(url)
      .setColor(color)
      message.reply({ embeds: [embed] })
    })
  })
}