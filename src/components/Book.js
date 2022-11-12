/* eslint-disable */

import '../App.css';

function Book(props) {
  const { author, title } = props;
  return (
    <div className="Detail">
      <p className="author">
        Author:
        {author}
      </p>
      <p className="title">
        Title:
        {title}
      </p>
      <button type="button" className="remove">Remove</button>
    </div>
  );
}

export default Book;
