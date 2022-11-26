import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.category);

  const btnEvent = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="category">
      <button type="button" className="statusBtn" onClick={btnEvent}>Check status</button>
      <p className="info">{info}</p>
    </div>
  );
};

export default Category;
