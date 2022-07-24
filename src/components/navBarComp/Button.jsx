import React from 'react';

import { useStateContext } from '../../context/ContextProvider';

const Button = ({ prop,icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, handleClick } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => handleClick(prop)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
