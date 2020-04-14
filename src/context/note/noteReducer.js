import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  CLEAR_NOTES,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_NOTE,
  FILTER_NOTES,
  CLEAR_FILTER,
  NOTE_ERROR,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
        loading: false,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === payload._id ? payload : note
        ),
        loading: false,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== payload),
        loading: false,
      };
    case CLEAR_NOTES:
      return {
        ...state,
        notes: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_NOTES:
      return {
        ...state,
        filtered: state.notes.filter((note) => {
          const regex = new RegExp(`${payload}`, 'gi');
          return note.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
