/* eslint-disable import/prefer-default-export */
import { CREATE_MESSAGE, GET_ERRORS } from './types';

// Create Message
const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// Return Errors
const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};

export { createMessage, returnErrors };
