import { createAction, handleActions } from 'redux-actions';
import { selectBar } from "../reduxStore/selectors";
import { BAR_DATA_LIST_URL } from "../urlEndpoints";

const initialState = { data: null, isRequested: false };

function BAR_DATA_SET(state, { payload }) {
  return { ...state, data: payload };
}

function BAR_DATA_REQUEST(state) {
  return { ...state, isRequested: true };
}

const setBarData = createAction('BAR_DATA_SET');
const requestBarData = createAction('BAR_DATA_REQUEST');

export function getBarData() {
  return (dispatch, getState) => {
    if (selectBar(getState()).isRequested) return;
    dispatch(requestBarData());
    fetch(BAR_DATA_LIST_URL)
      .then(response => response.json())
      .then(comments => comments[0])
      .then(comment => dispatch(setBarData(comment.name)))
      .catch(error => console.error(error));
  };
}

export default handleActions({
  BAR_DATA_SET,
  BAR_DATA_REQUEST,
}, initialState);
