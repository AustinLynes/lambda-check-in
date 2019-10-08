import {combineReducers} from 'redux'
import {LogReducer} from './logReducer'
import {dataReducer} from './reducer';

export const rootReducer = combineReducers({data: dataReducer, log: LogReducer})