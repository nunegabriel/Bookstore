/* eslint-disable */

const CHECK = 'CHECK';

const categories = [];

const categoriesReducer = (state = categories, action) => 
{
  switch (action.type) 
  {
    case CHECK:
      return ['TBA'];
    default:
     return state;
  }
};

export const CheckStatus = () => ({
  type: CHECK,
});

export default categoriesReducer;
