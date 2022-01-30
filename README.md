## Hyped-v4.0 BETA
A powerful discord bot for your server! Hyped Bot V4.0

* ⚙️ Ferramentas - Siga os passos abaixo para iniciar o bot
 * 📌 Crie um arquivo `config.json` seguindo as seguintes especificações:
```json 
 {
  "def": {
    "prefix": "h!",
    "color": "#008ddc"
  },
  "font": "Anton.fnt",
  "API": {
    "path": "https://api.hypeds.com/",
    "token": "<SEU TOKEN DE API HYPED>",
    "version": "v1"
  },
  "URL": {
    "website": "https://www.hypeds.com/",
    "discord": "https://www.hypeds.com/discord",
    "github": "",
    "statusPage": "https://stats.uptimerobot.com/1BnoXi6Mgp",
    "addBot": "https://www.hypeds.com/addbot"
  },
  "client": {
    "version": "BETA v4.0.0",
    "id": "777850651669168138",
    "name": "H Y P E D",
    "add": "https://www.hypeds.com/addbot",
    "description": "Sou o Hyped, um bot criado com <:Js:821710518967861258> Node.js usando a <:Djs:821710657162444820> Discord.js v13.2.0",
    "owner": {
      "name": "! Diogo06🐾#1337",
      "id": "732549418829611098"
    }
  },
  "owner": {
    "name": "! Diogo06🐾#1337",
    "id": "732549418829611098",
    "color": "#ce3700"
  },
  "reply": {
    "noperm": "❌ | Você não tem a permissão necessária!",
    "modIsOff": "❌ | O módulo está desativado!",
    "noMsg": "❌ | Escreva uma mensagem!",
    "menoperm": "❌ | Eu não tenho as permissões necessárias!",
    "invRequest": "❌ | Você está realizando muitas requests. Favor aguardar 30 min para executar este comando novamente!",
    "simsimi": "❌ | Eu não sei a resposta. Por favor me encine!"
  },
  "error": {
    "HPD_400": "❌ | Estou tendo dificuldades para fazer a Request! \n \n > Código de Erro: `HPD 400`",
    "HPD_401": "❌ | Time out de API! \n \n > Código de Erro: `HPD 401`",
    "HPD_402": "❌ | Too many requests. \n \n > Código de Erro: `HPD 402`",
    "HPD_500": "❌ | Acesso negado! \n \n > Código de Erro: `HPD 500`",
    "HPD_501": "❌ | Código expirado! \n \n > Código de Erro: `HPD 501`",
    "HPD_502": "❌ | TOKEN inválido! \n \n > Código de Erro: `HPD 502`",  
    "HPD_503": "❌ | Não consegui deletar algumas mensagens por serem muito antigas! \n \n > Código de Erro: `HPD 503`",
    "HPD_504": "❌ | Não consegui editar as perms do canal! \n \n > Código de Erro: `HPD 504`",
    "IMG_600": "❌ | Não consegui criar a imagem. \n \n > Código de Erro: `IMG 600`",
    "IMG_601": "❌ | Image server error. \n \n > Código de Erro: `IMG 601`",
    "IMG_602": "❌ | A imagem não carrega. \n \n > Código de Erro: `IMG 602`",
    "IMG_603": "❌ | Não consegui obter a URL da imagem. \n \n > Código de Erro: `IMG 603`",
    "IMG_604": "❌ | Erro ao realizar a request da imagem. \n \n > Código de Erro: `IMG 604`"
  },
  "footer": {
    "hgc": "© HypedGroupCode",
    "hpd": "© H Y P E D",
    "owner": "Código de ! Diogo06🐾#1337"
  }
}
```

* 📌 Crie um `.env` e insira seu TOKEN seguindo o exemplo:

```css
TOKEN=<SEU TOKEN AQUI>
PORT=1337
```
---

* 🌠 Inicie com `node index.js`

**Requirements**

* Node.js ^16
* `@discordjs/builders - ^0.6.0`
* `@discordjs/rest - ^0.1.0-canary.0`
* `discord-api-types - ^0.23.1`
* `discord.js - ^13.1.0`
* `axios - ^0.24.0`
* `beautify - ^0.0.8`
* `express - ^4.17.1`
* `jimp - ^0.16.1`
* `number-to-words - ^1.2.4`
* `random-reddit - ^2.0.3`
* `canvas - ^2.8.0`
* `moment - ^2.29.1`
* `mongoose - ^6.0.10`
* `quick.db - ^7.1.3`

© HypedGroupCode - [Site](https://www.hypeds.com/)
