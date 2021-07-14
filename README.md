# **SNOWBASE**
Suporte: [Discord.gg/AxcQf5Pf58](https://discord.com/invite/AxcQf5Pf58)

##### Um package brasileiro, usando json
## Instalação
```js
npm i snowbase
```
## *Formas de uso:*
> PEGAR UM VALOR

```js
const snowdb = require('snowbase');
snowdb.get(`some_bag`)// 10
```
> PEGAR TODOS OS VALORES

```js
const snowdb = require('snowbase');
snowdb.getAll()// [ { database: 'some_bag', value: 10 } ]
```
> SALVAR UM VALOR

```js
const snowdb = require('snowbase')
snowdb.save('some_bag', 150)// 150
```
> DELETAR UM VALOR

```js
const snowdb = require('snowbase');
snowdb.remove(`some_bag`)// null
```