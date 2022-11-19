import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const UpdateStatus = () => dispatch(CheckStatus());
  const CategoriesStatus = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      {CategoriesStatus.map((status) => <h1 key={status}>{status}</h1>)}
      <button type="button" className="btn" onClick={UpdateStatus}>
        Check Status
      </button>
    </div>
  );
}

export default Categories;
