const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
    let numero = Math.floor(Math.random() * 100) + 0;
    var bolsonaros = [
        "https://imgur.com/byAOgIj.png",
        "https://imgur.com/Q7WHtU4.png",
        "https://imgur.com/NVkeaz0.png",
        "https://imgur.com/aCeeWcy.png"
    ]
    const bolsonarosvar = bolsonaros[Math.floor(Math.random() * bolsonaros.length)]

    const embedaviso = new Discord.MessageEmbed()
    .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}howgay`)
    .setColor(color)
    .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}howgay <membro>`)
    .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
    .setFooter(config.footer.hgc);

    let membro = message.mentions.users.first()
    if(!membro) return message.reply({ embeds: [embedaviso] })

    let embedgay = new Discord.MessageEmbed()
    .setTitle(`:rainbow_flag: │ Howgay - Veja o quanto vc é gay - 100% Verídico`)
    .setDescription(`${membro.username} é **${numero}%** Gay!!`)
    .setImage(bolsonarosvar)
    .setColor(color)
    message.reply({ embeds: [embedgay] })
}