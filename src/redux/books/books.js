// Action
const ADD = 'src/redux/books/ADD';
const REMOVE = 'src/redux/books/REMOVE';

const displayBooks = {
  id: 1,
  author: 'Gabriel',
  title: 'All or something',
};

// Reducer
const bookReducer = (state = displayBooks, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.item];

    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    default: return state;
  }
};

// Action Creators
const addBook = (book) => ({
  type: ADD,
  item: book,
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export default bookReducer;
export { removeBook, addBook };
