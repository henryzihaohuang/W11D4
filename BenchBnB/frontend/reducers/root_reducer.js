import {combineReducers} from 'redux';
import entitiesReducer from './entities';
import errorsReducer from './errors_reducer';
import sessionReducer from "./session";

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})