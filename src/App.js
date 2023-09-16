import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import List from './Components/List';

function App() {

  const [items , setItems] = useState([]);

  function handleAddItems(item){
    setItems((items)=>[...items, item])
  }

  function handleDeleteItems(id){
    setItems (items=>items.filter(item=>item.id !== id))
  }

  function handleToggleItems(id){
    setItems ((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <>
    <Header />
    <Form onAddItems={handleAddItems} />
    <List items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItems} onClearList = {handleClearList} />
    <Footer items={items} />
    </>
  );
}

export default App;
