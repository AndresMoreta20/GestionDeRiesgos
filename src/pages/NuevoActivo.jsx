import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { activosData, customersData, customersGrid, activosGrid } from '../data/dummy';
import { Header } from '../components';

const NuevoActivo = () => {
    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className="w-80% m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Agregar activo" />
            <form>
                <label>Nombre
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        type="text"></input>
                </label>
                <br />
                <label>Descripción
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        type="text"></input>
                </label><br />
                <label>Categoría
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        type="text"></input>
                </label><br />
                <label>Etiqueta
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        type="text"></input>

                </label><br />

                <label>Clasificación
                    <input
                        className='w-96 m-200 border-solid border-sky-400 border-2'
                        type="text"></input>


                </label><br />
                <label>Valor 1</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="text"></input><br />
                <label>
                    Valor 2</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="text"></input><br />
                <label>Valor 3</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="text"></input><br />
                <label>Nivel</label>
                <input
                    className='w-96 m-200 border-solid border-sky-400 border-2'
                    type="text"></input>

            </form>


        </div>
    );
};

export default NuevoActivo;