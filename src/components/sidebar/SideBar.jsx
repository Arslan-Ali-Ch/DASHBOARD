import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { Button, IconButton, Tooltip } from '@mui/material';
import {links} from '../../data/dummy';
import { useStateContext} from '../../context/ContextProvider';


const SideBar = () => {
    const {activeMenu,setActiveMenu,screenSize}=useStateContext();
    const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-green-600 text-md m-2';
    const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';
    const handleCloseSideBar=()=>{
        if(activeMenu && screenSize <=900){
            setActiveMenu(false);
        }
    }


  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10'>
      {
        activeMenu &&(<>
        <div className='flex justify-between
        items-center '>
            <Link to='/' onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <IconButton>
                <SiShopware></SiShopware>
            </IconButton>
                <span>Shoppy</span>
            </Link>
            <Tooltip placement="bottom" title="Add" arrow>
                <IconButton sx={{mt:2,mr:1}}
                 onClick={()=>setActiveMenu((prev)=>!prev)}
                 >
                    <MdOutlineCancel
                   className='text-2xl rounded-full 
                    hover:bg-light-gray block md:hidden'
                    />
                </IconButton>
            </Tooltip>
        </div>
        <div className='mt-10'>
            {links.map((item,index)=>(
                <div key={index}>
                    <p className='text-gray-400 m-3 mr-4 uppercase'>
                        {item.title}
                    </p>
                    {
                        item.links.map((link,index2)=>(
                            <NavLink
                            to={`/${link.name}`}
                            key={index2}
                            onClick={handleCloseSideBar}
                            className={({isActive})=>isActive?activeLink:normalLink}
                            >
                                {link.icon}
                                <span className='capitalize'> 
                                {link.name}
                                </span>

                            </NavLink>
                        ))
                    }
                </div>
            ))}
        </div> 
        </>)
      }
    </div>
  )
}

export default SideBar
