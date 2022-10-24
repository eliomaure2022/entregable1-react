import React from 'react';
import quotes from '../quotes.json'
import Button from './Button';

const QuoteBox = ({ index, changeText}) => {
  return (
    <div className='box'>
      <div >
        <div className='div'>
          <i class="fa-solid fa-quote-left"></i>
          <p>{quotes[index].quote}</p>
        </div>
      </div>
      <h2>{quotes[index].author}</h2>
      <Button changeText={changeText} />
    </div>
  );
};


export default QuoteBox;