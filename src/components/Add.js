import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 } from 'uuid';

import { addBook } from '../redux/books/books';

// hooks
const AddBook = () => {
  const [initAuthor, setAuthor] = useState('');
  const [iniTitle, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const formEvent = (e) => {
    e.preventDefault();

    const newBook = {
      id: v4(),
      title: iniTitle,
      author: initAuthor,
      category,
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
    <div className="form-container">
      <div className="add-book"> ADD NEW BOOK</div>
      <form className="form" onSubmit={formEvent}>
        <input className="input" onChange={authorEvent} value={initAuthor} type="text" placeholder="Author" required />
        <input className="input" onChange={inputEvent} value={iniTitle} type="text" placeholder="Title" required />
        <select name="select" className="dropDown" onChange={(e) => setCategory(e.target.value)}>
          <option value="categories">categories</option>
          <option>Sci-Fi</option>
          <option>Drama</option>
          <option>Sports</option>
          <option>Romance</option>
          <option>Action</option>
          <option>Fantasy</option>
        </select>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
