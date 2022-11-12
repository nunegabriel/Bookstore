/* eslint-disable */
import React from 'react';
import Book from './Book';
import Add from './Add';

const list = [
  {
    id: 1,
    title: 'AFC',
    author: 'Gabriel',
  }
];

const Books = () => (
  <div>
    {list.map((list) => <Book key={list.id} title={list.title} author={list.author} />)}
    <Add />
  </div>
);

export default Books;
