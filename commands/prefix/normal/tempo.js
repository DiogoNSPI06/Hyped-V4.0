var weather = require('weather-js');
const Discord = require('discord.js')

module.exports.run = (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}tempo`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}tempo <cidade>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(`© HypedGroupCode`);
    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        //console.log(JSON.stringify(result, null, 2));
        if (!result) return message.channel.send(embd)
        if (!result[0]) return message.channel.send(`:x: | Essa cidade não existe.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**Tempo em ${result[0].location.name}**`)
            .addField(`🌡️|**Temperatura:**`, `${result[0].current.temperature}°C`)
            .addField(`❄️|**Sensação Térmica:**`, `${result[0].current.feelslike}°C`)
            .addField(`💧|**Umidade:**`, `${result[0].current.humidity}%`)
            .addField(`💨|**Vento:**`, `${result[0].current.windspeed}`)
            .setColor("RANDOM")
            .setFooter(`Utilize: h!weather ou h!tempo`)
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
        message.reply({ embeds: [embed] })

    });
};