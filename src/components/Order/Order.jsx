import { Table } from '@mui/material';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {dataImage} from '../../data/dummy'
import {ordersData} from '../../data/dummy'
import avatar from '../../data/avatar.jpg'


const Order = () => {
    const gridStyle = useMemo(() => ({ height: '500px', width: '100%' }), []);
    const userImg = (params) => {
      return (
        <div>
    <img style={{height:'40px' ,width:'40px'}} alt="" class="userListImg" src={avatar}/>    
        </div>
            
            );
        }
        const ordersGrid = [
          {
            field:'Image'
          },
          {
            
            field:'OrderItems',
          },
          { 
          field:'CustomerName',
          },
          {
        
            
            field: 'TotalAmount',
          },
          {
            field: 'Status',
          },
          {
            field: 'OrderID',
          },
        
          {
            field: 'Location',
         },
        ];
    const rowData=ordersData;
    const columnDefs=ordersGrid;
  // const [rowData, setRowData] = useState();
  //  const [columnDefs, setColumnDefs] = useState([
  //    { field: 'athlete' },
  //    { field: 'year' },
  //    { field: 'gold', cellRenderer: userImg },
  //    { field: 'silver', cellRenderer: userImg },
  //    { field: 'bronze', cellRenderer: userImg },
  //    { field: 'total', minWidth: 175, cellRenderer: userImg },
  //  ]);
   const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
  }, []);
  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => {
       // setRowData(data);
      });
  }, []);



  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 min-h-screen 
    bg-white rounded-3xl'>
      <div className='mb-10'>
        <p className='text-gray-400'>Page</p>
        <p className='text-3xl font-extrabold 
        tracking-tight text-slate-900'>Oders</p>
      </div>
      <div className="ag-theme-alpine h-screen w-full" >
      <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
      ></AgGridReact>
      </div>
    </div>
  )
}

export default Order
