import { combineReducers, configureStore } from '@reduxjs/toolkit';

import categoryReducer from './categories/categories';
import bookReducer from './books/books';

const combinedReducers = combineReducers({
  books: bookReducer,
  categoryReducer,
});

const store = configureStore({ reducer: combinedReducers });

export default store;
