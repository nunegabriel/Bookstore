import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACtions
const apiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iYvL6sTmHZFaKEnNuTRF/books';
const ADD_BOOK = 'bookStore/BOOK_ADDED';
const REMOVE_BOOK = 'bookStore/BOOK_REMOVED';
const GET_BOOK = 'bookStore/GET_BOOK';

const initBook = [];

// Reducers
const booksReducer = (state = initBook, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state];

    case `${GET_BOOK}/fulfilled`:
      return action.payload;

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export const getBooks = createAsyncThunk((GET_BOOK), async () => {
  const response = await axios.get(apiLink);
  const books = response.data;
  const resBook = Object.keys(books).map((id) => ({
    id,
    title: books[id][0].title,
    author: books[id][0].author,
    category: books[id][0].category,
  }));
  return resBook;
});

const addBook = createAsyncThunk((ADD_BOOK), async (payload, thunkApi) => {
  const {
    id, title, category, author,
  } = payload;

  const axObj = {
    item_id: id,
    author,
    category,
    title,
  };

  await axios.post(apiLink, axObj);
  thunkApi.dispatch(getBooks());
});

const removeBook = createAsyncThunk((REMOVE_BOOK), async (id) => {
  await axios.delete(`${apiLink}/${id}`);
  return id;
});

export default booksReducer;

export { addBook, removeBook };
