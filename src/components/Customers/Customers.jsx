import React from 'react'
import { GridComponent,ColumnsDirective,
ColumnDirective,Search,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids'

import { customersGrid,customersData } from '../../data/dummy'

const Customers = () => {
  return (
    <div className=' m-2 md:m-10 p-2 md:p-10 min-h-screen 
    bg-white rounded-3xl'>
      <div className='mb-10'>
        <p className='text-gray-400'>Page</p>
        <p className='text-3xl font-extrabold 
        tracking-tight text-slate-900'>Customers</p>
      </div>
     
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search','Delete']}
      width="auto"
      editSettings={{allowDeleting:true,
      allowEditing:true}}>
        
        <ColumnsDirective>
        {customersGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Sort,
        Selection,
        Filter,Page,Edit,Search,Toolbar]}></Inject>
      </GridComponent>
  
    </div>)
}

export default Customers
