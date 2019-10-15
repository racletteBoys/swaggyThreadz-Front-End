import Redux from 'redux';

const currentStyleReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyle || null;
    default:
      return state;
  }
};

export default currentStyleReducer;
