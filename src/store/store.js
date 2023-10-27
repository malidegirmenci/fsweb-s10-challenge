import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {reducers} from './reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
export const myStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk,logger)));