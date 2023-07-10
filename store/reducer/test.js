import { TEST_TEST } from "../types/types";

export default function test1(state = {}, action){
  switch (action.type) {
    case TEST_TEST:
      return { ...state, setReply: action.payload };
    default:
      return state;
  }
}
