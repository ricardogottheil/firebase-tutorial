# Referencia al documento

```js
const usuariosRef = db.collection('usuarios');
```

## Objeto

```js
const usuario = {
  nombre: 'Susana',
  activo: false,
  fechaNacimiento: 0,
  salario: 1950,
};
```

## Intertar datos

```js
db.collection('usuarios')
  .add(usuario)
  .then((docRef) => {
    console.log(docRef);
  })
  .catch((e) => console.log('error', e));
```

## Actualizar datos (UPDATE) (Actualiza el dato sin borrar lo demas)

```js
usuariosRef.doc('Vyz2pUcPLS7WFpxI8op2').update({
  activo: false,
});
```

## Actualizar datos (SET) (Actualiza el dato borrando lo demas) (Destructivo)

```js
usuariosRef.doc('Vyz2pUcPLS7WFpxI8op2').set({
  activo: false,
  edad: 44,
  casado: false,
  id: 123,
});
```

## Eliminar datos

```js
usuariosRef
.doc('Vyz2pUcPLS7WFpxI8op2')
.delete()
.then(() => console.log('Borrado))
.catch((e) => console.log('error', e));
```

## GET usuarios (Observable onSnapshot)

```js
usuariosRef.onSnapshot((snap) => retornaDocumentos(snap));
```

## GET usuarios (SIMPLE)

```js
usuariosRef.get().then((snap) => retornaDocumentos(snap));
```

## Queries (SELECT \* FROM usuarios WHERE activo = true)

```js
usuariosRef
  .where('activo', '==', true)
  .get()
  .then((snap) => retornaDocumentos(snap));
```

## Queries (SELECT \* FROM usuarios WHERE salario > 1800)

```js
usuariosRef
  .where('salario', '>', 1800)
  .get()
  .then((snap) => retornaDocumentos(snap));
```

## Queries (SELECT \* FROM usuarios WHERE salario > 1800 AND salario < 2300)

```js
usuariosRef
  .where('salario', '>', 1800)
  .where('salario', '<', 2300)
  .get()
  .then((snap) => retornaDocumentos(snap));
```

## Queries (SELECT \* FROM usuarios WHERE salario > 1800 AND activo == true)

```js
usuariosRef
  .where('salario', '>', 1800)
  .where('activo', '==', true)
  .get()
  .then((snap) => retornaDocumentos(snap));
```
