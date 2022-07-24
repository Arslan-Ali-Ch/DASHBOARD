import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';

import {FiSettings} from 'react-icons/fi'
import SideBar from './components/sidebar/SideBar';
import { useStateContext} from './context/ContextProvider';
import NavBar from './components/navbar/NavBar';
import Ecommerce from './components/Ecommerce/Ecommerce';
import Order from './components/Order/Order';
import Employees from './components/Employees/Employees';
import Customers from './components/Customers/Customers';
import Calanderss from './components/Calander/Calanderss';
import KanbanCom from './components/Kanban/KanbanCom';
import Editor from './components/Editor/Editor';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ThemeSetting from './components/themeSetting/ThemeSetting';
import Line from './components/charts/Line';
import Area from './components/charts/Area';
import Bar from './components/charts/Bar';
import Pie from './components/charts/Pie';
import Financial from './components/charts/Financial';
import ColorMapping from './components/charts/ColorMapping';
import Pyramid from './components/charts/Pyramid';
import Stacked from './components/charts/Stacked';




function App() {

const {currentColor,currentMod,activeMenu,themeSettings,setThemeSetting}=useStateContext();
return (
    <div className={currentMod==='Dark'?'dark':''}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          
          {/* setting button div*/}
          <div className='fixed right-6 bottom-6 ' style={{zIndex:'1000'}}>
           <Tooltip title="Setting" arrow>
           <IconButton onClick={()=>setThemeSetting(true)}>
            <FiSettings className='text-5xl p-3 hover:drop-shadow-3xl
            hover:bg-yellow-600 text-white rounded-full'
            style={{backgroundColor:currentColor}}
            />
            </IconButton>
           </Tooltip>
          </div>
          {/* Side bar*/}
          {
            activeMenu ?(
              <div className='w-72 fixed sidebar
              dark:bg-secondary-dark-bg bg-white'>
                <SideBar></SideBar>
              </div>
            ): (
              <div> 
                <SideBar></SideBar>
               </div>
            )
          }
          {/*navbar*/}
          <div
            className={
              `dark:bg-main-dark-bg bg-main-bg
              min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}`
           }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <NavBar />
            </div>
            <div  >
            {themeSettings && <ThemeSetting />}
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={(<Order/>)}/>
                <Route path="/employees" element={<Employees/>}  />
                <Route path="/customers" element={<Customers/>}  />

                {/* apps  */}
                <Route path="/kanban" element={<KanbanCom/>} />
                <Route path="/editor" element={<Editor/>}  />
                <Route path="/calendar" element={<Calanderss/>} />
                <Route path="/color-picker" element={<ColorPicker/>} />

                {/* charts  */}
                <Route path="/line" element={<Line/>} />
                <Route path="/area" element={<Area/>}  />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>}/>
                <Route path="/financial" element={<Financial/>}  />
                <Route path="/color-mapping" element={<ColorMapping/>}  />
                <Route path="/pyramid" element={<Pyramid/>}  />
                <Route path="/stacked" element={<Stacked/>}  />

              </Routes>
            </div>
          
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
