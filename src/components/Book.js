import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import load from '../img/loading.png';

import { removeBook } from '../redux/books/books';

function Book({
  title,
  author,
  id,
}) {
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="display-books">
      <div className="display-items">
        <div className="btn-links">
          <button type="button" className="remove-btn">Comment</button>
          <button type="button" className="remove-btn" onClick={() => deleteBook(id)}>Delete Book</button>
          <button type="button" className="remove-btn">Edit</button>
        </div>

        <p className="book-title">
          {' '}
          {' '}
          Title:
          {' '}
          {title}
          <br />
        </p>
        <p className="book">
          {' '}
          {' '}
          Author:
          {' '}
          {author}
          <br />
        </p>
        <p className="book">
          {' '}
          {' '}
          Category:
          {' '}
          ...
          <br />
        </p>
      </div>
      <div>
        <img className="load" src={load} alt="loading" />
        <div>80% completed</div>
      </div>
      <div className="btn-left">
        <p className="chapter">CURRENT CHAPTER</p>
        <br />
        <p className="chapter"> CHAPTER 17</p>
        <br />
        <button type="submit" className="submit-btn-1">Update Progress</button>
      </div>

    </div>

  );
}

Book.defaultProps = {
  id: 'id',
  title: 'title',
  author: 'author',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

export default Book;
