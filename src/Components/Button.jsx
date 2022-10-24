import React from 'react';

const Button = ({changeText,}) => {
  return (
    <div className='but' >
      <button onClick={changeText} style={{}}>{<i className="fa-solid fa-shuffle"></i>}</button>
    </div>
  );
};
  
    


export default Button;