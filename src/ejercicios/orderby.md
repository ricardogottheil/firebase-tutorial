# Referencia al documento

```js
const usuariosRef = db.collection('usuarios');
```

## Ordenar por nombre (Default: asc)

```js
usuariosRef.orderBy('nombre', 'desc').get().then(retornaDocumentos);
usuariosRef.orderBy('nombre').get().then(retornaDocumentos);
```

## Ordenar por nombre (Default: asc) y salario asc

```js
usuariosRef.orderBy('nombre').orderBy('salario').get().then(retornaDocumentos);
```
