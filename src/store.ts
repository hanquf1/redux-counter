import {createStore, combineReducers} from 'redux'
import {reducer as counter} from './modules/counter'

//npm install --save redux-devtools-extension
//redux 확장 도구 쓰려면 필요한 것.
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
   counter,
});

export const store = createStore(reducer, composeWithDevTools());