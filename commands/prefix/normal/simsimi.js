const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const request = require('https');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}simsimi`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}simsimi <Pergunta>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> O Simsimi é muito mal educado. Não se sinta ofendido por suas respostas!`)
  .setFooter(config.footer.hgc);

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: `:x: | Eu não tenho a permissão necessária!` })
  }

  let argumentos = args.slice(0).join(" ")
  if(!argumentos) return message.reply({ embeds: [embd] })

  try {
    let image = (`https://imgur.com/4p2m765.png`)
    let webhook = await message.channel.createWebhook('Simsimi', {avatar: image})

    let apis = [
      `https://api-sv2.simsimi.net/v2/?text=${argumentos}&lc=pt&cf=false`
    ]

    var svrandom = await apis[Math.floor(Math.random() * apis.length)]

    request.get(svrandom, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      })

      resp.on('end', async () => {
        console.log(JSON.parse(data).success)
        if(JSON.parse(data).success === "Eu não resposta. Por favor me ensine.") {
          return int.reply(config.reply.simsimi)
        }
        await webhook.send(`<@${message.author.id}> | ` + JSON.parse(data).success)
      });
    }).on("error", (error) => {
      console.log(error)
    })
  } catch(err) {
    message.reply(config.error.HPD_402)
  }

}