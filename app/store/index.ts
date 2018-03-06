import { combineReducers, createStore } from 'redux'

export type RootState = {
    count: number;
};

export default createStore(
    combineReducers()
)