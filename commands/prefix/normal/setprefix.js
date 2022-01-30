const Discord = require('discord.js');
const fs = require('fs');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  const embederror = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}setprefix`)
  .setColor(`RANDOM`)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}setprefix <prefixo> `)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`);

  let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
  if(message.channel.type == 'dm') return;
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.prefix
    }
  }
  let prefix0 = prefixes[message.guild.id].prefix;

  if(!args[0]) return message.reply({ embeds: [embederror] })

  prefixes[message.guild.id] = {
    prefix: args[0]
  }

  fs.writeFile("../../database/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let embed = new Discord.MessageEmbed()
  .setTitle("👍 | Prefixo Definido!")
  .setColor(color)
  .setDescription(`> Definido para **${args[0]}**`)
  message.reply({ embeds: [embed] })
}