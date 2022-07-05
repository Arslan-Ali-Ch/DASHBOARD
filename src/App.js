import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';

import {FiSettings} from 'react-icons/fi'
import SideBar from './components/sidebar/SideBar';
import { useStateContext} from './context/ContextProvider';
import NavBar from './components/navbar/NavBar';
import Ecommerce from './components/Ecommerce/Ecommerce';
import product9 from './data/product9.jpg'
import Order from './components/Order/Order';

library.add(faUser, faCoffee, faCamera, faTwitter, faGithub, faFacebook);
function App() {
const {activeMenu}=useStateContext();

  return (
    <div >
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          
          {/* setting button div*/}
          <div className='fixed right-6 bottom-6 ' style={{zIndex:'1000'}}>
           <Tooltip title="Setting" arrow>
           <IconButton>
            <FiSettings className='text-5xl p-3 hover:drop-shadow-3xl
            hover:bg-yellow-600 text-white rounded-full bg-blue-500'
            
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
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <NavBar />
            </div>
            <div  >
            
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={(<Order/>)}/>
                <Route path="/employees" element="wdwd"  />
                <Route path="/customers" element="wdwd"  />

                {/* apps  */}
                <Route path="/kanban" element="wdwd" />
                <Route path="/editor" element="wdwd"  />
                <Route path="/calendar" element="wdwd" />
                <Route path="/color-picker" element="wdwd" />

                {/* charts  */}
                <Route path="/line" element="wdwd" />
                <Route path="/area" element="wdwd"  />
                <Route path="/bar" element="wdwd" />
                <Route path="/pie" element="wdwd" />
                <Route path="/financial" element="wdwd"  />
                <Route path="/color-mapping" element="wdwd"  />
                <Route path="/pyramid" element="wdwd"  />
                <Route path="/stacked" element="wdwd"  />

              </Routes>
            </div>
          
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
