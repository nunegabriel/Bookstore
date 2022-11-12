/* eslint-disable */
import React from 'react';
import Add from './Add';
import Book from './Book';


const list = [
  {
    id: 1,
    title: 'AFC',
    author: 'Gabriel',
  }
];

function Books () 
{  
    return(
        <div>
    {list.map((list) => <Book key={list.id} title={list.title} author={list.author} />)}
    <Add />
  </div>

    )
}

export default Books;
