const Discord = require('discord.js');
const request = require('https');
const { get } = require('superagent');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`🔞 | Comando: ${prefix}yiff`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}yiff <tags>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  if(!args[0]) return message.reply({ embeds: [embd] })

  /*
  get(`https://e621.net/posts.json?tags=${args[0]}&limit=1`).end((err, response) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("idk man")
    .setImage(response.body.posts[0].file.url)
    .setColor(color);

    message.reply({ embeds: [embed] })
  })
  */
  
  request.get(`https://e621.net/posts.json?tags=${args[0]}&limit=2`, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', async () => {
      const embedYiff = new Discord.MessageEmbed()
      .setTitle(`<:betaGasm:922714074360479794> | Yiff `)
      .setDescription(`Tags pesquisadas: ${args[0]}`)
      .setImage(JSON.parse(data).posts.file[0].url)
      .setColor(color)
      .setFooter(config.footer.hgc);

      await message.reply({ embeds: [embedYiff] })
    });

  }).on("error", (err) => {
    console.log("Error:" + err.message);

    const embedError = new Discord.MessageEmbed()
    .setTitle(`:x: | Erro!`)
    .setDescription(config.error.IMG_04)
    .addField()
    .setColor("RED")
    .setFooter(config.footer.hpd)

    message.reply({ embeds: [embedError] })
  });
}