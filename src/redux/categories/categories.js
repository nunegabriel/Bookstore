const BOOK_STATUS = 'src/redux/books/CATEGORY';

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_STATUS:
      return 'N/A';

    default:
      return state;
  }
};

const bookCategory = () => ({
  type: 'BOOK_STATUS',
});

export default categoryReducer;

export { bookCategory };
