import React from 'react'

import {HtmlEditor,Image,Inject,Link,QuickToolbar,
RichTextEditorComponent,Toolbar} from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../../data/dummy'



const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10
    bg-white rounded-3xl'>
          <div className='mb-10'>
        <p className='text-gray-400'>Page</p>
        <p className='text-3xl font-extrabold 
        tracking-tight text-slate-900'>Editor</p>
      </div>
        
        <RichTextEditorComponent >
        <Inject services={[HtmlEditor,Toolbar,Image,Link,QuickToolbar]} />

        </RichTextEditorComponent> 
        
    </div>
  )
}

export default Editor
