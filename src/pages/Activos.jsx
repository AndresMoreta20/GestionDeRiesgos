import React, {useState } from 'react';
//import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
//import DataManager from '@syncfusion/ej2-data' 
import { useNavigate } from 'react-router-dom';
//import { activosData, activosGrid } from '../data/dummy';
import { Header, ActivosTabla } from '../components';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '../config/client';


const Activos = () => {
 
  

  const activosGrid = [
    { type: 'checkbox', width: '50' },
    {
      field: 'codigo',
      headerText: 'Codigo',
      width: '80',
      textAlign: 'Center',
      isPrimaryKey: true,
    },
    {
      field: 'nombre',
      headerText: 'Nombre',
      width: '100',
      textAlign: 'Center'
    },

    {
      field: 'descripcion',
      headerText: 'Descripcion',
      width: '200',
      format: 'C2',
      textAlign: 'Center'
    },
    {
      field: 'etiqueta',
      headerText: 'Etiqueta',
      width: '100',
      textAlign: 'Center'
    },
    {
      field: 'categoria',
      headerText: 'Categoria',
      width: '100',
      textAlign: 'Center'
    },

    {
      field: 'clasificacion',
      headerText: 'Clasificacion',
      width: '100',
      textAlign: 'Center'
    },

    {
      field: 'valorGlobal',
      headerText: 'Valor Gloabl',
      width: '100',
      textAlign: 'Center'
    },
    {
      field: 'nivel',
      headerText: 'Nivel',
      width: '100',
      textAlign: 'Center'
    }]
  //const navigate = useNavigate();
  
  //const [activosList, setActivosList] = useState({"codigo":"AM74","descripcion":"in","etiqueta":"JA","nombre":"inventario","integridad":2,"valorGlobal":1.3333333333333333,"clasificacion":"Restringido","categoria":"AM","disponibilidad":1,"nivel":"Bajo","confidencialidad":1},{"descripcion":"de matriz","nombre":"servidor","confidencialidad":1,"etiqueta":"HaW","nivel":"Medio","integridad":2,"valorGlobal":2,"clasificacion":"Publico","categoria":"Sup","disponibilidad":3,"codigo":"Sup22"},{"valorGlobal":1.6666666666666667,"etiqueta":"JA","clasificacion":"Restringido","categoria":"AM","codigo":"AM41","integridad":2,"disponibilidad":2,"nombre":"informe","confidencialidad":1,"descripcion":"in","nivel":"Medio"},{"categoria":"Doc","valorGlobal":0.10000000000000002,"integridad":0.1,"confidencialidad":0.1,"codigo":"Doc28","nombre":"","disponibilidad":0.1,"clasificacion":"Confidencial","etiqueta":"Con","descripcion":"","nivel":"Bajo"});
  const [activosList, setActivosList] = useState([]);
  //const [loadComponent, setLoadComponent] = useState(true);
  //let activosList2 = [{"descripcion":"in","nivel":"Bajo","clasificacion":"Restringido","etiqueta":"JA","confidencialidad":1,"valorGlobal":1.3333333333333333,"categoria":"AM","disponibilidad":1,"codigo":"AM74","integridad":2,"nombre":"inventario"},{"disponibilidad":3,"nombre":"servidor","valorGlobal":2,"etiqueta":"HaW","integridad":2,"confidencialidad":1,"nivel":"Medio","codigo":"Sup22","clasificacion":"Publico","descripcion":"de matriz","categoria":"Sup"},{"valorGlobal":1.6666666666666667,"nivel":"Medio","codigo":"AM41","disponibilidad":2,"nombre":"informe","categoria":"AM","descripcion":"in","confidencialidad":1,"clasificacion":"Restringido","etiqueta":"JA","integridad":2}];
  const cargarActivos = async () => {
    const querySnapshot = await getDocs(collection(db, 'Activos'));
    var activosL = [];
    
    querySnapshot.docs.forEach(doc => {
      var tmpData  = doc.data();
      var key = doc.id;
      activosL.push({key,
        ...tmpData});
    });
  
    setActivosList(activosL);
    console.log(activosList);
  }
  
  

  useEffect(() => {
    cargarActivos();
  }, [])
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Activos " />
      
      <ActivosTabla data={activosList} grid = {activosGrid} />
      

    </div>
  );
};

export default Activos;