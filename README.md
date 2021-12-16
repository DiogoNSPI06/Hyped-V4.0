## Hyped-v4.0-ALPHA
A powerful discord bot for your server! Hyped Bot V4.0

* ⚙️ Ferramentas - Siga os passos abaixo para iniciar o bot
 * 📌 Crie um arquivo `config.json` seguindo as seguintes especificações:
 ```json 
 {
  "def": {
    "prefix": "<PREFIXO PADRAO DO SEU BOT>",
    "color": "<COR PADRAO DO SEU BOT>"
  },
  "URL": {
    "website": "<LINK DO WEBSITE DO SEU BOT>",
    "statusPage": "<LINK DA STATUSPAGE DO SEU BOT>",
    "addBot": "<LINK DE ADICIONAR O BOT>"
  },
  "client": {
    "version": "v4.0.0 <VERSAO DO SEU BOT>",
    "id": "<ID DO SEU BOT>",
    "name": "<NOME DO SEU BOT>",
    "add": "<LINK DE ADICIONAR O BOT>",
    "owner": {
      "name": "<NOME DO CRIADOR DO BOT>",
      "id": "<ID DO CRIADOR DO BOT>"
    }
  },
  "owner": {
    "name": "<NOME DO CRIADOR DO BOT>",
    "id": "<ID DO CRIADOR DO BOT>",
    "color": "<COR DE PERFIL DO CRIADOR DO BOT>(opcional)"
  },
  "per": {
    "adm": "ADMINISTRATOR",
    "mod": "BAN_MEMBERS",
    "manager": "MANAGER_GUILD"
  }
}
```
* 📌 Crie um `.env` e insira seu TOKEN seguindo o exemplo:

```css
TOKEN=<SEU TOKEN AQUI>
PORT=1337

```
 * 🌠 Inicie com `node index.js`

**Requirements**

* Node.js
* `@discordjs/builders - ^0.6.0`
* `@discordjs/rest - ^0.1.0-canary.0`
* `discord-api-types - ^0.23.1`
* `discord.js - ^13.1.0`
* `express - ^4.17.1`
* `jimp - ^0.16.1`
* `moment - ^2.29.1`
* `mongoose - ^6.0.10`
* `quick.db - ^7.1.3`

© HypedGroupCode - [Site](https://www.hypeds.com/)