# **SNOWBASE**
Suporte: [Discord.gg/AxcQf5Pf58](https://discord.com/invite/AxcQf5Pf58)

Página oficial: [snowbase.js.com](https://frozenfirebr.gitbook.io/snowbase/)
##### Um package brasileiro, usando json e [fs](https://www.npmjs.com/package/fs), antes de iniciar escolha o arquivo que irá armazenar os dados (.json).
## Instalação
```js
npm i snowbase
```
## *Formas de uso:*
> PEGAR

```js
const snow = require('snowbase');
const db = new snow.database('./snowbase.json')
db.get(`user/bag`)// 10
```
> SALVAR

```js
const snow = require('snowbase');
const db = new snow.database('./snowbase.json')
db.save('user/bag', 150)// 150
```
> DELETAR

```js
const snow = require('snowbase');
const db = new snow.database('./snowbase.json')
db.remove(`some_bag`)// null
```

> COMO DIVIDIR ELEMENTOS EM PASTAS

```js
const snow = require('snowbase');
const db = new snow.database('./snowbase.json')
db.get('testes/teste1')// null
```