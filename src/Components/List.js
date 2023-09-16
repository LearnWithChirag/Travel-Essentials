import React from 'react';
import '../CSS/List.css';
import Items from './Item';

const List = ({items , onDeleteItems , onToggleItems , onClearList}) => {

  return (
    <div className='list'>
        <ul className='list-items'>
            {items.map((item)=>(
              <Items item= {item} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} key={item.id} />
            )
            )}
            
        </ul>
        <input className='clear-Btn' onClick={onClearList} type="button" value="Clear List" />
    </div>
  );
}

export default List;