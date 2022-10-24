import React from 'react';

const Button = ({changeText, colors, changeColor}) => {
  return (
    <div className='but'  >
      <button onClick={changeText} style={{background:colors[changeColor]}} >{<i className="fa-solid fa-shuffle"></i>}</button>
    </div>
  );
};
  
    


export default Button;