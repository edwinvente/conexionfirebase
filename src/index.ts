import db from './firebase/config';
import { retornaDocumentos } from "./helpers/mostrar-documentos";

const usuario = {
    nombre: 'Matias',
    activo: false,
    fechaNaci: 0,
    salario: 2800,
}

const usuariosRef = db.collection('usuarios');

//insert into usuarios ...
/* db.collection('usuarios')
    .add(usuario)
    .then(docRef => {
        console.log(docRef)
    })
    .catch(e => console.log(e)) */

//update    
/* usuariosRef
    .doc('5qpdknG3x3DvFpl0rUiW')
    .update({
        activo: false
    }) */

//set es destructivo
/* usuariosRef
    .doc('5qpdknG3x3DvFpl0rUiW')
    .set({
        activo: false,
        edad: 28,
        casado: false,
        id: 123
    })*/
//delete from user
/* usuariosRef
    .doc('5qpdknG3x3DvFpl0rUiW')
    .delete()
    .then(resp => console.log(resp))
    .catch(e => console.log(e)) */
//select * from
/* usuariosRef
    .onSnapshot(snap => retornaDocumentos(snap)) */

//select where
/* usuariosRef.where('activo', '==', false).get().then(retornaDocumentos); */

//tarea salarios mayores a 1800
/* usuariosRef.where('salario', '>', 1800).get().then(retornaDocumentos); */

//condiciones anidadas
/* usuariosRef.where('salario', '>', 1800)
    .where('salario', '<', 2500)
    .get().then(retornaDocumentos); */

//condiciones anidadas con campos diferentes
/* usuariosRef.where('salario', '>', 1800)
    .where('activo', '==', true)
    .get().then(retornaDocumentos); */
//orderby en dos campos diferentes
/* usuariosRef
    .orderBy('nombre')
    .orderBy('salario')
    .get().then(retornaDocumentos); */
//query con limitt
/* usuariosRef
    .limit(2)
    .get()
    .then(retornaDocumentos); */

//btn next
const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let firstDocument: any = null;
let lastDocument: any = null;
btnNext.addEventListener('click', () => {
    const query = usuariosRef
        .orderBy('nombre')
        .startAfter(lastDocument)

    query.limit(2).get().then(snap => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    })
});

//btn previous
const btnPrev = document.createElement('button');
btnPrev.innerText = 'Previous';
document.body.append(btnPrev);

btnPrev.addEventListener('click', () => {
    const query = usuariosRef
        .orderBy('nombre')
        .endBefore(firstDocument)

    query.limit(2).get().then(snap => {
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    })
});

btnNext.click();