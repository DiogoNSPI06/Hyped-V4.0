const Discord = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  var paves = [
    `Como se chama uma pessoa que pinta carros?

    Car-pinteiro`,
    `O que um matemático disse para um índio?

    8 pi.`,
    `lembram que antigamente o açougue embalava as carnes no jornal?

    hoje é moderno, o jornal já vem embutido.`,
    ` Já imaginou se chovesse macarrão?

    Ia ser massa demais.`,
    `Minha mãe disse que estava com problema de vista...

    Aí eu instalei o Windows 10 pra ela...`,
    `Um paulista chega num hotel em Porto Alegre

    E pergunta ao recepcionista: Moço, como está o quarto 306? O recepcionista olha o computador, e depois de alguns segundos Mas bah guri, esse quarto está tri-vago!`,
    `Eu não sabia que meu pai tinha um segundo emprego como professor...

    Mas um dia, quando cheguei em casa, todas as provas estavam lá.`,
    `Na capital do Rio Grande do Norte já é Natal!`,
    `O saci é um cara muito chato.

    Ele só da mancada.`,
    `Qual o sistema econômico do inferno?

    É o capetalismo`,
    `Um homem tomou um suco de laranja e logo após se jogou da torre Eiffel. Qual o nome do filme?

    O último Tang em Paris.`,
    `O gaúcho não achava o carro no estacionamento. Qual é o modelo do carro?

    Kadetchê.`,
    ` O que é um alcoólotra?

    Um guri foi até seu pai e lhe fez uma pergunta: Pai, o que é um alcoólatra? Está vendo aquelas quatro árvores filhão? Pois então, um alcoólatra é quem vê oito delas. Mas pai, eu só vejo duas árvores.`,
    `Qual é o XMEN que pede para crescer?

    A Mística, entenderam? Mi-istica`,
    `Sabe qual o rapper brasileiro que sempre abre portas?

    Gabriel opens a door`,
    `Este calor é culpa do PT

    Se fosse o Aécio, seria Neves.`,
    `Os nadadores americanos não são culpados

    O que as gravações não mostram é eles perguntando a um cara na rua aonde ele podiam ir pra mijar, e o cara respondendo: "Lá no posto ipiranga"`,
    `Mês passado, comecei a aprender alemão com meu tio...

    ... acredita que agora já consigo até prever o futuro das pessoas?`,
    `Por que a cobra resolveu virar uma escova de cabelo?

    Porque ela estava cansada de serpente. ENTENDEU? ENTENDEU? SERPENTE -- SER PENTE`,
    `Um anão foi no centro espirita e estava muito triste...

    e quando ele saiu de la ele estava muito feliz. E peguntaram: Por que você esta feliz? Então ele disse: E porque descobrir que não sou mais anão sou medium.`,
    `Por que o Goku, Vegeta e Gohan tiraram nota 10 em nado sincronizado?

    Porque eles estavam super ensaiyajinhos.`,
    `Por que o vidente se mudou para Berlim?

    Para aprender a-lê-mão`,
    `Quais são as três ferramentas que o gaúcho mais usa?

    Alicatchê Serrotchê E o martelo. Sabe porque o martelo? PORQUE ELE BATCHÊ`,
    `Um absurdo! Meu vizinho veio bater aqui na porta de casa as 3 horas da madrugada!

    Sorte dele que eu tava acordado tocando bateria.`,
    `Por que o cego nunca entra numa discussão?

    Por não ter um ponto de vista.`,
    `Por que o asilo não precisa pagar a conta de luz?

    Porque lá está cheio de velinhas.`
  ]

  let image = (`https://imgur.com/t53C1Tx.png`)

  let webhook = await message.channel.createWebhook('Tiodopave', {avatar: image})
  await webhook.send(paves[Math.floor(Math.random() * paves.length)])
  webhook.delete();
}