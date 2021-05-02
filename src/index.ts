import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrarDocumentos';

const usuariosRef = db.collection('usuarios');

const btnNext = document.createElement('button');
btnNext.innerText = 'Next page';

document.body.appendChild(btnNext);

let firstDocument: any = null;
let lastDocument: any = null;

btnNext.addEventListener('click', () => {
  const query = usuariosRef.orderBy('nombre').startAfter(lastDocument);

  query
    .limit(2)
    .get()
    .then((snap) => {
      firstDocument = snap.docs[0] || null;
      lastDocument = snap.docs[snap.docs.length - 1] || null;
      retornaDocumentos(snap);
    });
});

btnNext.click();

// Btn previous
const btnPrevious = document.createElement('button');
btnPrevious.innerText = 'Prev page';

document.body.appendChild(btnPrevious);

btnPrevious.addEventListener('click', () => {
  const query = usuariosRef.orderBy('nombre').endBefore(firstDocument);

  query
    .limit(2)
    .get()
    .then((snap) => {
      firstDocument = snap.docs[0] || null;
      lastDocument = snap.docs[snap.docs.length - 1] || null;
      retornaDocumentos(snap);
    });
});
