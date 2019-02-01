/* eslint-disable import/prefer-default-export */
import { CREATE_MESSAGE } from './types';

// Create Message
const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
export { createMessage };
