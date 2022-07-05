import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import avatar from '../../data/avatar.jpg'
import { useStateContext } from '../../context/ContextProvider'
import { IconButton, Tooltip } from '@mui/material'
import Cart from '../navBarComponent/cart/Cart'
import Chat from '../navBarComponent/chat/Chat'
import Notification from '../navBarComponent/notification/Notification'
import Profile from '../navBarComponent/profile/Profile'
import { useEffect } from 'react'

const NavBar = () => {
    const { activeMenu, setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize } = useStateContext();


    useEffect(()=>{
        const handleResize=()=>setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        
        handleResize();
        return ()=>window.removeEventListener('resize',handleResize);

    },[]);

    useEffect(()=>{
        if(screenSize<=900){
            setActiveMenu(false);
        }
        else{
            setActiveMenu(true);
        }
    },[screenSize]);




    const NavButton = ({ title, customfunc, icon, color, dotcolor }) => (
        <Tooltip title={title} arrow>

            <IconButton
                onClick={customfunc}

            >
                <button type="button"
                    style={{ color }}
                    className="relative m-1 text-2xl rounded-full  hover:bg-light-gray"
                >
                    {icon}
                </button>
                <span style={{ background: dotcolor }} className="absolute inline-flex rounded-full h-2 w-2 right-1 top-1"></span>


            </IconButton>
            
        </Tooltip>
        
    )


    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton
                title="Menu" customfunc={() => setActiveMenu((prev) => !prev)}
                color="blue"
                icon={<AiOutlineMenu />}
            >

            </NavButton>
            <div className='flex'>
                <NavButton
                    title="cart"
                    customfunc={() => handleClick('cart')}
                    color="blue"
                    icon={<FiShoppingCart />}
                >

                </NavButton>
                <NavButton
                    title="chat"
                    dotcolor='blue'
                    customfunc={() => handleClick('chat')}
                    color="blue"
                    icon={<BsChatLeft />}
                >

                </NavButton>
                <NavButton
                    title="notification"
                    dotcolor='yellow'
                    customfunc={() => handleClick('notification')}
                    color="blue"
                    icon={<RiNotification3Line />}
                >

                </NavButton>
            <Tooltip title="profile" placement='bottom' arrow>

                <div className='flex items-center mr-3 gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                onClick={()=>handleClick('profile')}>
                    <img src={avatar} className='rounded-full w-10 h-10 ml-3'></img>
                    <p>
                        <span className='text-gray-400 text-14'>Hi, </span>{' '}
                        <span className='text-gray-400 font-bold ml-1 text-14'>Alpha</span>
                    </p>
                    <MdKeyboardArrowDown className='text-gray-400 text-xl'/>
                </div>
            </Tooltip>
            {isClicked.cart && <Cart/>}
            {isClicked.chat && <Chat/>}
            {isClicked.notification && <Notification/>}
            {isClicked.profile && <Profile/>}


            </div>
        </div>
    )
}

export default NavBar
