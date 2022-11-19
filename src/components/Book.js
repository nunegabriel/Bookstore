import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id,
  title,
  author,
  removeBook,
}) {
  return (
    <div>
      <h2>
        Title :
        {' '}
        {title}
      </h2>
      <h3>
        Author :
        {' '}
        {author}
      </h3>

      <button className="btn" type="button" onClick={() => removeBook(id)}>
        Remove
      </button>
    </div>
  );
}
Book.defaultProps = {
  id: '',
  title: '',
  author: '',
  removeBook: null,
};

Book.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  author: PropTypes.string,
  removeBook: PropTypes.func,
};

export default Book;
