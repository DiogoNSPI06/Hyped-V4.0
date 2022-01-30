const Discord = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle("HYPED | Menu de ajuda!")
  .addField(`🔗| Me Adicione`, `[Clique Aqui](https://www.hypeds.com/addbot)`)
  .addField(`💿| Meus Comandos`, `*Para acessar as abas basta reagir de acordo com o que procura!*`)
  .addField(`<:pasta:786293846156771379>|CATEGORIAS:`, `
  🔍**| Info**
  ⚙️**| Utilitários
  🔧**| Staff**
  😆**| Diversão**
  📷**| Photoshop**
  🛠️**| Config**
  ↩️| *Voltar*`)
  .setFooter(`Wanna see this in english? Use ${prefix}setlanguage !`)
  .setImage(`https://i.imgur.com/HpI5ppM.png`)
  
  message.reply({ embeds: [embed] })
  /*
  message.reply({ embeds: [embed] }).then(msg => {
    msg.react("🔍").then(e => {
      msg.react("⚙️").then(e1 => {
        msg.react("🔧").then(e2 => {
          msg.react("😆").then(e3 => {
            msg.react("📷").then(e4 => {
              msg.react("🛠️").then(e5 => {
                msg.react("↩️").then(e6 => {
                  const filter = (reaction, user) => {
                    return ['🔍', '⚙️', '🔧', '😆', '📷', '🛠️', '↩️'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };

                  msg.awaitReactions({ filter, time: 60000, errors: ['time'] }).then(async collected => {
                    const reaction = collected.first()

                    if(reaction.emoji.name === '🔍') {
                      const embedInfo = new Discord.MessageEmbed()
                      .setTitle("Categoria | 🔍 Informativos")
                      .setColor(color)
                      .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
                      .addField('> Meus Comandos:', `\n \`${prefix}ajuda\` ou \`${prefix}help\` - Exibe este menu. \n \`${prefix}avatar <usuário>\` - Mostra o Perfil do usuário. \n \`${prefix}perfil <usuário>\` - Mostra o perfil HYPED do usuário. \n \`${prefix}pontos\` Motra o seu XP no Hyped. \n \`${prefix}ping\` - Mostra o delay do bot-servidor. \n \`${prefix}serverinfo\` - Mostra as informações deste servidor. \n \`${prefix}servericon\` - Mostra o ícone do servidor. \n \`${prefix}userinfo\` - Mostra as informações de um determinado usuário. \n \`${prefix}botinfo\` - Mostra as informações do bot. \n \`${prefix}uptime\` - Mostra o horário em que eu acordei.`)

                      msg.edit({ embeds: [embedInfo] })
                      msg.reactions.resolve('🔍').users.remove(message.author.id)
                    }
                    if(reaction.emoji.name === '⚙️') {
                      const embedUtils = new Discord.MessageEmbed()
                      .setTitle("Categoria | ⚙️ Utilitários")
                      .setColor(color)
                      .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
                      .addField('> Meus Comandos:', `\n \`${prefix}daily\` - Te dá até $ 10.000,00 por Dia \n \`${prefix}bal\` - Te mostra quanto dinheiro você tem. \n \`${prefix}loja\` - Te permite comprar decorações para seu perfil. \n \`${prefix}tempo <cidade>\` - Motra como está o tempo na sua cidade. \n \`${prefix}encurta <url>\` - Encurta uma url. \n \`${prefix}verify\` - Faz a verificação do captcha(obs: sómente se seu servidor estiver configurado) \n \`${prefix}urlbuton\` - Cria um botão com Url. \n \`${prefix}embed\` - Cria um embed customizado.`)

                      msg.edit({ embeds: [embedUtils] })
                      msg.reactions.resolve('⚙️').users.remove(message.author.id)
                    }
                    if(reaction.emoji.name === '🔧') {
                      const embedStaff= new Discord.MessageEmbed()
                      .setTitle("Categoria | 🔧 Staff")
                      .setColor(color)
                      .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
                      .addField('> Meus Comandos:', ``)
                      
                      msg.edit({ embeds: [embedStaff] })
                      msg.reactions.resolve('🔧').users.remove(message.author.id)
                    }
                    if(reaction.emoji.name === '😆') {
                      const embedFun = new Discord.MessageEmbed()
                      .setTitle("Categoria | 😆 Diversão")
                      .setColor(color)
                      .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
                      .addField('> Meus Comandos:', ``)
                      
                      msg.edit({ embeds: [embedFun] })
                      msg.reactions.resolve('😆').users.remove(message.author.id)
                    }
                    if(reaction.emoji.name === '📷') {
                      const embedPhoto = new Discord.MessageEmbed()
                      .setTitle("Categoria | 📷 Photoshop")
                      .setColor(color)
                      .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
                      .addField('> Meus Comandos:', ``)
                      
                      msg.edit({ embeds: [embedPhoto] })
                      msg.reactions.resolve('📷').users.remove(message.author.id)
                    }
                    if(reaction.emoji.name === '🛠️') {
                      const embedConfig = new Discord.MessageEmbed()
                      .setTitle("Categoria | 🛠️ Configuração")
                      .setColor(color)
                      .setDescription(`Meu prefixo neste servidor: \`${prefix}\``)
                      .addField('> Meus Comandos:', ``)
                      
                      msg.edit({ embeds: [embedConfig] })
                      msg.reactions.resolve('🛠️').users.remove(message.author.id)
                    }
                    if(reaction.emoji.name === '↩️') {
                      msg.edit({ embeds: [embed] })
                      msg.reactions.resolve('↩️').users.remove(message.author.id)
                    }
                  })
                })
              })
            })
          })
        })
      })
    })
  })
  */
}