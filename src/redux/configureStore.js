import { createStore, combineReducers } from 'redux';
import BooksReducer from './books/books';
import categoriesReducer from './categories/categories';

// combining reducers
const everyReducers = combineReducers({
  BooksReducer,
  categoriesReducer,
});

export default function configureStore() {
  const store = createStore(everyReducers);
  return store;
}
