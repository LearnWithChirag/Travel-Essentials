import React from 'react';
import '../CSS/Footer.css';

const Footer = ({items}) => {
  if(!items.length){
    return(

      <p className='footer-Stats'>
      Start adding some items to your packing lists 🚀
    </p>
      )
  }


  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked/numItems)*100);

  return (
    <div className='footer-Stats'>
        <footer>
          {percentage === 100 ? "You got everything! Ready to go ✈️" : 
       ` You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%) `}
        </footer>
    </div>
  )
}

export default Footer;