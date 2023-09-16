import React, { useState } from 'react';
import '../CSS/Form.css';

const Form = ({onAddItems}) => {
  const [data , setData] = useState("");
  

  function handleSubmit(e){
    e.preventDefault();

    if(!data) return;

    const newItem = { data , packed : false, id: Date.now()};
    console.log(newItem);

    onAddItems(newItem);
    setData("");

  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <input type="text" placeholder='Item..' value={data} onChange={(e)=> setData(e.target.value)} />
        <button>ADD</button>

    </form>
  )
}

export default Form;