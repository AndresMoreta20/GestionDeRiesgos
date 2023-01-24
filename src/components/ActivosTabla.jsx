import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../config/client';
export default function ActivosTabla(props) {
   /* 
const columns = [{field:'codigo', headerName:'Codigo', width:'70'},
{field:'nombre', headerName:'Nombre', width:'100'},
{field:'descripcion', headerName:'descripcion', width:'100'},
{field:'categoria', headerName:'Categoría', width:'100'},
{field:'etiqueta', headerName:'Etiqueta', width:'100'},
{field:'nivel', headerName:'Nivel', width:'100'},
{field:'valorGlobal', headerName:'Valor Global', width:'100'}
]
*/


const[selectionModel, setSelectionModel] = useState();

const eliminarActivos = async () => {
    if(selectionModel != null){
        await deleteDoc(doc(db, "Activos", selectionModel.row.key));
    }
    console.log(selectionModel.row);
    window.location.reload(false);
  }


const navigate = useNavigate();
return (
    <div style={{ height: 400, width: '200em' }}>
        <button type='button'
        className='text-2x1 p-2
          hover:drop-shadow-xl
          hover:bg-light-gray
          text-white'
        style={{
          background: 'purple',
          borderRadius: ''
        }}
        onClick={() => { navigate('/NuevoActivo') }}>
        Agregar
      </button>
      
      <button type='button'
        className='text-2x1 p-2
          hover:drop-shadow-xl
          hover:bg-light-gray
          text-white'
        style={{
          background: 'blue',
          borderRadius: ''
        }}
        onClick={() => {}}>
        Actualizar
      </button>

      <button type='button'
        className='text-2x1 p-2
          hover:drop-shadow-xl
          hover:bg-light-gray
          text-white'
        style={{
          background: 'red',
          borderRadius: ''
        }}
        onClick={() => {eliminarActivos()}}>
        Eliminar
      </button>
      
      <DataGrid
        rows={props.data}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={(rowData) => {
            setSelectionModel(rowData);
          }}
        getRowId={(row) => row.codigo}
      />
      {console.log(selectionModel)}
    </div>
  );
  
}
/*import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';


function ActivosTabla(props) {
    const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div>
        <GridComponent
        dataSource={props.data}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading 
          {props.grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default ActivosTabla*/