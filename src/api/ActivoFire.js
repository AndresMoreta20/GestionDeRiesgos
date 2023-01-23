import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import {db} from '../config/client'
let count = 5;


export const  nuevoActivo = async (activo) => {

    //await setDoc(doc(db, "Activos", activo.nombre), activo);
    await addDoc(collection(db, "Activos"), activo);
    count ++;
}

/**  categoria: activo.categoria,
        clasificacion: activo.clasificacion,
        descripcion: activo.descripcion,
        etiqueta: activo.etiqueta,
        nivel: 'Bajo',
        nombre: activo.nombre,
        valor: activo.valor,
        valorTotal: activo.valorTotal**/