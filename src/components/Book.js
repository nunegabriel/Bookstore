import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
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
    <div className="displayBooks">
      <p className="book">
        {' '}
        {' '}
        Title:
        {' '}
        {title}
      </p>
      <p className="book">
        {' '}
        {' '}
        Author:
        {' '}
        {author}
      </p>
      <button type="button" className="removeBtn" onClick={() => deleteBook(id)}>Delete</button>
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
