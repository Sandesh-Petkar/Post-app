import { combineReducers } from 'redux'

import PublishReducer from './PublishReducer';

const rootReducer = combineReducers({

    PublishPost: PublishReducer,

});

export default rootReducer;