import React, {useState } from 'react';

//import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, registerEventHandlers } from '@syncfusion/ej2-react-grids';
import { activosData } from '../data/dummy';
import { Header } from '../components';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/client'


const NuevoActivo = () => {
    /*const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };*/
    const categorias = ['Doc', 'Psw'];
    const etiquetas = ['Con', 'Acc'];
    const clasificaciones = ['Publico', 'Privado'];
    const nivel = ['Bajo', 'Medio'];

    const [nombreS, setNombreS] = useState('');
    const [descripcionS, setDescripcionS] = useState('');
    const [categoriaS, setCategoriaS] = useState(categorias[0]);
    const [etiquetaS, setEtiquetaS] = useState(etiquetas[0]);
    const [clasificacionS, setClasificacionS] = useState(clasificaciones[0]);
    const [valor1S, setValor1S] = useState(0);
    const [valor2S, setValor2S] = useState(0);
    const [valor3S, setValor3S] = useState(0);
    const [valorTotalS, setValorTotalS] = useState(0);
    const [nivelS, setNivelS] = useState(nivel[0]);
    

    let dataCopy = activosData;

    /*let activoTemp = {
        categoria: 'Doc',
        clasificacion: 'Publico',
        descripcion: 'Sueldos de empleados',
        etiqueta: 'Con',
        nivel: 'Bajo',
        nombre: 'Sueldos',
        valor: [1, 2, 2],
        valorTotal: 1.333,
    }*/

    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const navigate = useNavigate();
   // const onSubmit = data => console.log(data);
    const handleSubmitActivo = async () =>{
        //e.preventDefault()
        //console.log(e.target[1].value)
        //await nuevoActivo(activoU);
        
        /*const activoTemp = {
            nombre : nombreS,
            descripcion: descripcionS,
            categorias: categoriaS,
            etiqueta: etiquetaS,
            clasificacion: clasificacionS,
            valor: [valor1S, valor2S, valor3S],
            valorTotal:( valor1S + valor2S + valor3S) / 3,
            nivel: nivelS
        }
*/
       // console.log(activoTemp)
       setValorTotalS (1.3);
       console.log(valor1S);
       console.log(valor2S);
       console.log(valor3S);
       console.log(valorTotalS);
        const res = await addDoc(collection(db, "Activos"), {
            "categoria":categoriaS,
            "clasificacion":clasificacionS,
            "descripcion":descripcionS,
            "etiqueta":etiquetaS,
            "nivel":nivelS,
            "nombre":nombreS
         });
         console.log(res);
         //const res = await addDoc(collection(db, "Activos"), activoTemp);
    }
/*
    const onSubmit = async (data) =>{
        //console.log(data);
        activoTemp.nombre = data.nombre;
        activoTemp.descripcion = data.descripcion;
        activoTemp.categoria = data.categoria;
        activoTemp.etiqueta = data.etiqueta;
        activoTemp.clasificacion = data.clasificacion;
        activoTemp.valor[0] = parseInt(data.valor1);
        activoTemp.valor[1] = parseInt(data.valor2);
        activoTemp.valor[2] = parseInt(data.valor3);
        activoTemp.valorTotal = (activoTemp.valor[0] + activoTemp.valor[1] + activoTemp.valor[2]) / 3;
        activoTemp.nivel = data.nivel;

        //console.log(activoTemp);
        //dataCopy.push(activoTemp);
        let unActivo = await addDoc(collection(db, "Activos"), activoTemp);
        console.log(unActivo);
        //navigate('/Activos');
    }*/

    return (
        <div className="w-80% m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Agregar activo" />
            <input type="button" onClick={()=>{handleSubmitActivo()}} value="Hola"></input>
            <form onSubmit={()=>{handleSubmitActivo()}}>
                <label>Nombre
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        value={nombreS}
                        type="text" onChange={event => setNombreS(event.target.value)
                        }></input>
                </label>
                <br />
                <label>Descripción
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        value={descripcionS}
                        type="text" onChange={e => setDescripcionS(e.target.value)}></input>
                </label><br />
                <label>Categoría <br />
                    <select defaultValue={categorias[0]} id='categoriaSelect' onChange={e => setCategoriaS(e.target.value)}>
                        <option value={categorias[0]}>{categorias[0]}</option>
                        <option value={categorias[1]}>{categorias[1]}</option>
                    </select>
                </label><br />
                <label>Etiqueta <br />
                    <select defaultValue={categorias[0]} id='etiquetaSelect' onChange={e => setEtiquetaS(e.target.value)}>
                        <option value={etiquetas[0]}>{etiquetas[0]}</option>
                        <option value={etiquetas[1]}>{etiquetas[1]}</option>
                    </select>
                </label><br />

                <label>Clasificación <br />
                    <select defaultValue={categorias[0]} id='clasificacionSelect' onChange={e => setClasificacionS(e.target.value)}>
                        <option value={clasificaciones[0]}>{clasificaciones[0]}</option>
                        <option value={clasificaciones[1]}>{clasificaciones[1]}</option>
                    </select>

                </label><br />
                <label>Valor 1</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="number" onChange={e => setValor1S(e.target.value)}></input><br />
                <label>
                    Valor 2</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="number" onChange={e => setValor2S(e.target.value)}></input><br />
                <label>Valor 3</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="number" onChange={e => setValor3S(e.target.value)}></input><br />
                <label>Nivel<br />
                    <select id='nivelSelect' onChange={e => setNivelS(e.target.value)}>
                        <option value="Bajo">Bajo</option>
                        <option value="Medio">Medio</option>
                    </select>

                </label><br />
                <input  
                value="Enviar"
                type="button"
                className='
                    mt-8
                    text-2x1 p-2
                    hover:drop-shadow-xl    
                  hover:bg-light-gray
                  text-white'
                    style={{
                        background: 'purple',
                        borderRadius: ''
                    }}
                    onClick={()=>{handleSubmitActivo()}}></input>

            </form>


        </div>
    );
};

export default NuevoActivo;