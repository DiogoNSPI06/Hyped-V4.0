const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment')
moment.locale('pt-br')

 module.exports.run = async (client, message, args, prefix, color, config) => {

    const date = message.guild.createdAt
    const joined = message.member.joinedAt

    let on = 'Ligado'
    let on2 = 'Ligado'
    let on3 = 'Ligado'
    let invBlock = db.get(`InviteBlocker_${message.guild.id}`)
    let captcha = db.get(`CapchaIsEnabled_${message.guild.id}`)
    let welcomeSys = db.get(`${message.guild.id}_welcomecanal`)
    if(!captcha || captcha === "false") on = 'Desligado'
    if(!invBlock) on2 = 'Desligado'
    if(!welcomeSys) on3 = "Desligado"

    const region = {
      brazil: ':flag_br: Brazil'
    }

   const botGuild = await client.guilds.cache.get(message.guild.id)
   let botCount = botGuild.members.cache.filter(m => m.user.bot === true).size

    const embed = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor('🔍| Informações do servidor')
      .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
      .setDescription('📰 | Aqui estão algumas informações deste servidor:')
      .addField('> **📌| Nome**', message.guild.name, true)
      .addField('**📎| ID**', message.guild.id, true)
      .addField('> 🔹| Nível de boost:',message.guild.premiumTier, true)
      .addField('<:BP_editar:753027401319055380> | Prefixo', `**${prefix}**`, true)
      .addField('> <a:pogfish:821748401023746118> | Nivel de Verificação:', `${message.guild.verificationLevel}`)
      .addField(`👥| Membros: (${message.member.guild.memberCount})`,`**😀| Pessoas:** ${botGuild.memberCount - botCount} \n **🤖| Bots:**${botCount}`, true)
      .addField(`**💬| Canais:** (${message.guild.channels.cache.size})`, `**📝| Canais de Texto:** ${message.guild.channels.cache.filter(m => m.type === 'text').size} \n **🔊| Canais de Voz:** ${message.guild.channels.cache.filter(m => m.type === 'voice').size} \n **📢| Canais de Anúncios:** ${message.guild.channels.cache.filter(m => m.type === 'news').size}`,true)
      .addField('> **🛠️| Configuração do Servidor: **', `\`Anti Invite:\` **${on2}** \n \`Captcha:\` **${on}**\n \`Welcomer:\` **${on3}**`)
      .addField('> **🗓️| Servidor Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .setFooter(config.footer.hgc)
      .setTimestamp()


    message.channel.send({ embeds: [embed] })

}

function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}