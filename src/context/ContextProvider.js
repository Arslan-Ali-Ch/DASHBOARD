import { useContext, useState } from "react";
import { createContext } from "react";

const StateContext=createContext();

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider=({children})=>{
    const [activeMenu,setActiveMenu]=useState(true);
    const [isClicked,setIsClicked]=useState(initialState);
    
    const [cart,setCart]=useState(false);
    
    const [chat,setChat]=useState(false);
    
    const [notification,setNotification]=useState(false);
    
    const [profile,setProfile]=useState(false);

    const handleClick=(clicked)=>{
        console.log(clicked);
        if(clicked==='cart'){
            console.log(cart);
            setCart((prev)=>!prev);
            console.log(cart);
        }
        else if(clicked=='chat'){
            setChat(!chat);
        }
        else if(clicked=='notification'){
            setNotification(!notification);
        }
        else if(clicked=='profile'){
            setProfile(!profile);
        }
        

    }
    const[screenSize,setScreenSize]=useState(undefined);

    const [currentColor,setcurrentColor]=useState(localStorage.getItem('colorMode'));
    const[currentMod,setcurrentMode]=useState( localStorage.getItem('themeMode'));
    
    const [themeSettings,setThemeSetting]=useState(false);


    const setColor=(color)=>{
        console.log(localStorage.getItem('colorMode'));
        setcurrentColor(color);
        localStorage.setItem('colorMode',color);
        setThemeSetting(false);
    }

    const setMode=(e)=>{
        console.log(e.target.value);
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value);
        setThemeSetting(false);
    }



    return(
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,setScreenSize,
            currentColor,setColor,
            currentMod,setMode,
            themeSettings,setThemeSetting,
            cart,
            chat,
            notification,
            profile,
          
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext=()=>useContext(StateContext); 