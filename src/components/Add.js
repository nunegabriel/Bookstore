import '../App.css';

function Add() {
  return (
    <form className="book-form">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Add;
