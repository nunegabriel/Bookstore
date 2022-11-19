const ADD = 'ADD';
const REMOVE = 'REMOVE';

const books = [
  { id: 1, author: 'Gabriel Nunekpeku', title: 'All or something' },
  { id: 2, author: 'Hurey Deril', title: 'We move' },
];

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: Date.now(),
        author: action.option.author,
        title: action.option.title,
      },
      ];

    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const removeDefault = (id) => ({
  type: REMOVE,
  id,
});

export const addDefault = (addedBook) => ({
  type: ADD,
  option: addedBook,
});

export default BooksReducer;
