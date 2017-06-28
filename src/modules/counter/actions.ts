import * as t from './types';

export const increment = () => ({
    type: t.INCREMENT
});

export const decrement = () => ({
    type: t.DECREMENT,
});

export const setDiff = (value) => ({
    type: t.SET_DIFF,
    payload: value
});