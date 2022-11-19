import { React, useState } from 'react';
import { PropTypes } from 'prop-types';

const Addfunction = ({ bookAdd }) => {
  const [initBook, setBook] = useState({
    author: '',
    title: '',
  });

  const formEvent = (e) => {
    bookAdd(e, initBook);
    setBook({ title: '', author: '' });
  };

  return (
    <div className="form">
      <h2>ADD NEW BOOK</h2>

      <form onSubmit={formEvent}>

        <input
          type="text"
          placeholder="Title"
          className="title"
          value={initBook.title}
          required
          onChange={(e) => setBook({ ...initBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          className="author"
          value={initBook.author}
          required
          onChange={(e) => setBook({ ...initBook, author: e.target.value })}
        />
        <button type="submit" id="add-book">ADD BOOK</button>
      </form>
    </div>
  );
};

Addfunction.propTypes = {
  bookAdd: PropTypes.func.isRequired,
};

export default Addfunction;
