import { TEST_TEST } from "../types/types";

export function test1(dataToSubmit) {
    const request = dataToSubmit
    return {
      type: TEST_TEST,
      payload: request,
    };
}
  
