import * as t from './types';

export const reducer = (state = {value: 0, diff: 1}, action) => {
    switch (action.type) {
        case t.INCREMENT:
            return {...state, value: state.value + state.diff};
        case t.DECREMENT:
            return {...state, value: state.value - state.diff};
        case t.SET_DIFF:
            return {...state, diff: action.payload};
        default:
            return state;
    }
};

export default reducer;
