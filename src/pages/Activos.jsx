import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { activosData, customersData, customersGrid, activosGrid } from '../data/dummy';
import { Header } from '../components';

const Activos = () => {
  const navigate = useNavigate();
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Activos " />
      <button type='button'
              className='text-2x1 p-2
          hover:drop-shadow-xl
          hover:bg-light-gray
          text-white'
              style={{
                background: 'purple',
                borderRadius: ''
              }}
              onClick={()=>{navigate('/NuevoActivo')}}>
              Agregar
            </button>
      <GridComponent
        dataSource={activosData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {activosGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
      
    </div>
  );
};

export default Activos;