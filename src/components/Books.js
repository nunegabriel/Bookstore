/* eslint-disable */

import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { addDefault, removeDefault } from '../redux/books/books';
import Addfunction from './Add';

function Books ()
 {
  const dispatch = useDispatch();

  const BookStored = useSelector((state) => state.BooksReducer);

  const bookAdd = (e, bookItem) => {
    e.preventDefault();
    dispatch(addDefault(bookItem));
  };
  const removeBook = (id) => {
    dispatch(removeDefault(id));
  };
  
  return (
    <div>
      {BookStored.map((item) => (
        <Book author={item.author} title={item.title} id={item.id} key={item.id} removeBook={removeBook} />
      ))}
      <Addfunction bookAdd={bookAdd} />
    </div>
  );
};

export default Books;
