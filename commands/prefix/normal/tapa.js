const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}tapa`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}tapa <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(`© HypedGroupCode`);

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!user) return message.channel.send({ embeds: [embd] });

    let tapas = [
      `https://imgur.com/VMaCj7X.gif`,
      `https://imgur.com/TvmiAbe.gif`,
      `https://imgur.com/4T9HGAG.gif`,
      `https://imgur.com/FVpkoSu.gif`,
      `https://imgur.com/z0Yiqk2.gif`
     ];

     let tapaembed = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(`**Nossa!**<@${message.author.id}>** deu um tapa em **<@${user.id}> 😱!`)
      .setImage(tapas[Math.floor(Math.random() * tapas.length)])
      message.channel.send({ embeds: [tapaembed] }).then(msg => {
      msg.react('↩️').then(r => {
      const backfilter = (reaction, users) => reaction.emoji.name === '↩️' && users.id === user.id;

      const backs = msg.createReactionCollector(backfilter);

      backs.on('collect', r => {
        const backembed = new Discord.MessageEmbed()
        .setColor(color)
        .setDescription(`**Nossa!**<@${user.id}>** deu um tapa em **<@${message.author.id}> 😱!`)
        .setImage(tapas[Math.floor(Math.random() * tapas.length)])
        msg.channel.send({ embeds: [backembed] })
      })
    })
  })
}
