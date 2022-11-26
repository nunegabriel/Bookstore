import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [iniTitle, setTitle] = useState('');
  const [initAuthor, setAuthor] = useState('');

  const dispatch = useDispatch();

  const formEvent = (e) => {
    e.preventDefault();

    const newBook = {
      id: v4(), title: iniTitle, author: initAuthor, category: '',
    };
    setTitle('');
    setAuthor('');
    dispatch(addBook(newBook));
  };

  const inputEvent = (e) => {
    setTitle(e.target.value);
  };

  const authorEvent = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={formEvent}>
        <span> Add A New Book</span>
        <input className="input" onChange={authorEvent} value={initAuthor} type="text" placeholder="Author" />
        <input className="input" onChange={inputEvent} value={iniTitle} type="text" placeholder="Title" />
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
