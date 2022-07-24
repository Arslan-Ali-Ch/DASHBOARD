import React from "react";
import {ColumnsDirective,ColumnDirective, KanbanComponent} from '@syncfusion/ej2-react-kanban'

import {kanbanData,kanbanGrid} from '../../data/dummy'


const KanbanCom=()=>{

    return(
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10
        bg-white rounded-3xl'>
              <div className='mb-10'>
            <p className='text-gray-400'>Page</p>
            <p className='text-3xl font-extrabold 
            tracking-tight text-slate-900'>Kanban</p>
          </div>
          <KanbanComponent
          id="Kanban"
          dataSource={kanbanData}
          cardSettings={{contentField:'Summary',headerField:'Id'}}
          keyField="Status">

            <ColumnsDirective>
            {
                kanbanGrid.map((item,key)=>(
                    <ColumnDirective key={key} {...item}/> 
                ))
            }
            </ColumnsDirective>
          </KanbanComponent>
         
          
        </div>
    )
}

export default KanbanCom