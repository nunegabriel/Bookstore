const BOOK_STATUS = 'BOOK_STATUS';

const categories = [];

export const CheckStatus = () => ({
  type: BOOK_STATUS,
});

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case BOOK_STATUS:
      return 'N/A';
    default:
      return state;
  }
};

export default categoriesReducer;
