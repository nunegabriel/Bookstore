// Actions
const CHECK_STATUS = 'CHECKING_STATUS';

// Default state
const defaultState = [];

const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;

export { checkStatus };
