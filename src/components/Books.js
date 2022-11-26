import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './Add';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const state = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="display">
      {!state.length ? (
        <div className="sattus">No available books</div>
      ) : null}
      {
      state && state.map(
        (item) => (
          <Book
            key={item.id}
            author={item.author}
            title={item.title}
            id={item.id}
          />
        ),
      )
      }
      <AddBook />
    </div>
  );
};

export default Books;
