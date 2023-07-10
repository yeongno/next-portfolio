
import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import test1 from "./reducer/test";


const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;


    default:
      return combineReducers({test1})(state, action);
  }
};

export default rootReducer;