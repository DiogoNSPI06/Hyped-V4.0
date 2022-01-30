const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}ticket`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: \`${prefix}ticket <on || off ou create || delete>\``)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Use \`${prefix}ticket <on ou off>\` para ativar e desativar o módulo, e use \`${prefix}ticket <create ou delete>\` para criar ou deletar um ticket.`)
  .setFooter(`© HypedGroupCode`);

  if(!args[0]) return message.reply({ embeds: [embd] })

  if(args[0] === "on") {
    if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

    db.set(`ticketIsOn_${message.guild.id}`, true)
    message.channel.send(`<a:HYpositive:763111725510950932> | Sistema de ticket foi ativado!`)
    return;
  } 

  if(args[0] === "off") {
    if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

    db.set(`ticketIsOn_${message.guild.id}`, false)
    message.channel.send(`:x: | Sistema de ticket foi desativado!`)
    return;
  }

  let moduleIsOn = db.get(`ticketIsOn_${message.guild.id}`)

  if(!moduleIsOn || moduleIsOn === false) return message.reply(config.reply.modIsOff)

  if(args[0] === "create") {
    let random = '';
    let dict = '1234567890'
    for(var i = 0; i < 4; i++) {
      random = random + dict.charAt(Math.floor(Math.random() * dict.length));
    }

    let randomName = `🔒・Ticket：${random}`;

    const embed = new Discord.MessageEmbed()
    .setTitle(`<a:HYpositive:763111725510950932> | Ticket - ID: ${random}`)
    .setDescription(`> Para fechar o ticket digite \`${prefix}ticket delete\``)
    .setColor(color)
    .setFooter(`© HypedGroupCode`)

    message.channel.send(`<a:HYpositive:763111725510950932> | Ticket Criado! ID: ${random}`)

    await message.guild.channels.create(randomName, {
      type: "text",
      permissionOverwrites: [
        {
          id: message.author.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        }
      ]
    }).then(m => {
      m.send({ embeds: [embed] })

      db.set(`${message.guild.id}_${message.author.id}_ticketChannelID`, m.id)
    })
  }

  if(args[0] === "delete") {
    let channelID = db.get(`${message.guild.id}_${message.author.id}_ticketChannelID`);

    if(message.channel.id !== channelID) return message.channel.send(`:x: | Utilize esse comando no **canal** do ticket que você criou!`)

    if(!channelID) return message.reply(`:x: | Você já deletou o Ticket!`)

    let deleteChannel = message.guild.channels.cache.get(channelID)
    deleteChannel.delete();
    db.delete(`${message.guild.id}_${message.author.id}_ticketChannelID`)
  }
}