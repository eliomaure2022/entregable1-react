import React from 'react';
import quotes from '../quotes.json'


const QuoteBox = ({ index, changeText }) => {
  return (
    <div className='box'>
      <div className='div'>
        <i class="fa-solid fa-quote-left"></i>
        <p>{quotes[index].quote}</p>
      </div>
      <h2>{quotes[index].author}</h2>
    </div>
  );
};
        




export default QuoteBox;